import { NextRequest, NextResponse } from "next/server";
import { sendBookingToTelegram, BookingData } from "@/lib/telegram";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const required = ["name", "phone", "service", "date", "address"];
    for (const field of required) {
      if (!body[field] || body[field].trim() === "") {
        return NextResponse.json(
          { error: `Поле "${field}" обязательно для заполнения` },
          { status: 400 }
        );
      }
    }

    const bookingData: BookingData = {
      name: body.name.trim(),
      phone: body.phone.trim(),
      service: body.service.trim(),
      date: body.date.trim(),
      address: body.address.trim(),
      comment: body.comment?.trim() || "",
    };

    const success = await sendBookingToTelegram(bookingData);

    if (!success) {
      return NextResponse.json(
        { error: "Ошибка отправки. Попробуйте позже." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Заявка отправлена!" });
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
