"use client";
import { useState } from "react";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  borderRadius: 10,
  background: "#fff",
  border: "1px solid #fff",
  fontSize: 13,
  color: "#1a1a1a",
  outline: "none",
  fontFamily: "inherit",
  transition: "border 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 12,
  fontWeight: 500,
  color: "#1a1a1a",
  marginBottom: 5,
};

export function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    address: "",
    comment: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Ошибка отправки");
        return;
      }
      setSuccess(true);
      setForm({
        name: "",
        phone: "",
        service: "",
        date: "",
        address: "",
        comment: "",
      });
    } catch {
      setError("Не удалось отправить. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="section" style={{ background: "#F5CED8" }}>
      <div className="container-page">
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 className="section-title">
            Заполните форму, чтобы записаться на процедуру
          </h2>
          <p className="section-subtitle">
            Укажите ваше имя, контактные данные, выберите услугу, укажите дату и
            время, адрес выезда и добавьте комментарий
          </p>

          {success && (
            <div
              style={{
                padding: 12,
                borderRadius: 10,
                background: "#d4f5d4",
                border: "1px solid #7dc87d",
                color: "#1a5c1a",
                fontSize: 13,
                marginBottom: 14,
              }}
            >
              ✅ Заявка отправлена! Мы свяжемся с вами.
            </div>
          )}
          {error && (
            <div
              style={{
                padding: 12,
                borderRadius: 10,
                background: "#ffd4d4",
                border: "1px solid #e08080",
                color: "#7a1a1a",
                fontSize: 13,
                marginBottom: 14,
              }}
            >
              ⚠️ {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 14 }}
          >
            <div>
              <label style={labelStyle}>Имя</label>
              <input
                style={inputStyle}
                placeholder="Ваше имя"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label style={labelStyle}>Телефон</label>
              <input
                type="tel"
                style={inputStyle}
                placeholder="Ваш номер телефона"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
              />
            </div>

            <div>
              <label style={labelStyle}>Услуга</label>
              <select
                style={{ ...inputStyle, cursor: "pointer" }}
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                required
              >
                <option value="">Выберите услугу</option>
                <option value="Ламинирование ресниц (1600 рублей)">
                  Ламинирование ресниц — 1600 рублей
                </option>
                <option value="Ламинирование бровей (1500 рублей)">
                  Ламинирование бровей — 1500 рублей
                </option>
                <option value="Комплекс: ресницы и брови (2700 рублей)">
                  Комплекс: ресницы и брови — 2700 рублей
                </option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Дата и время</label>
              <input
                style={inputStyle}
                placeholder="Выберите дату и время процедуры"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                required
              />
            </div>

            <div>
              <label style={labelStyle}>Адрес</label>
              <input
                style={inputStyle}
                placeholder="Ваш адрес"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                required
              />
            </div>

            <div>
              <label style={labelStyle}>Комментарии</label>
              <textarea
                style={{ ...inputStyle, minHeight: 90, resize: "vertical" }}
                value={form.comment}
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="btn-pink"
              disabled={loading}
              style={{ width: "100%", opacity: loading ? 0.6 : 1 }}
            >
              {loading ? "Отправка..." : "Записаться"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}