# 📝 Form Validator Uygulaması

Bu proje, **Vanilla JavaScript** kullanılarak geliştirilmiş,
kullanıcı kayıt formu için **client-side doğrulama (validation)** yapan
basit ama etkili bir uygulamadır.

Bootstrap 5 kullanılarak görsel olarak desteklenmiştir.

---
<img width="722" height="768" alt="image" src="https://github.com/user-attachments/assets/cd782c12-adb8-41bc-9f8d-f4748c52794c" />



## 🚀 Özellikler

- Kullanıcı adı doğrulama
 - En az 4, en fazla 20 karakter
- E-posta format kontrolü (Regex)
- Şifre uzunluk kontrolü
- Şifre tekrar alanı (eşleşme kontrolü)
- Telefon numarası doğrulama
  - Sadece rakam
  - 10 haneli
  - 5 ile başlama zorunluluğu
- Hatalı alanlarda kırmızı uyarı
- Doğru alanlarda yeşil doğrulama
- Form submit edilmeden önce tüm kontroller yapılır

---

## 🛠 Kullanılan Teknolojiler

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Bootstrap 5

---

## 📂 Proje Yapısı

2-Form-Validator-Uygulaması/


├── index.html
|
├── script.js
|
├── styles.css
|
└── README.md


---

## ▶️ Nasıl Çalıştırılır?

1. Projeyi klonla:
   ```bash
   git clone https://github.com/eemreaksu/form-validator.git



cd Form-Validator-Uygulaması
index.html dosyasını tarayıcıda aç.

⚙️ JavaScript Çalışma Mantığı
Tüm input alanları fields dizisi içinde tanımlanır

Her alan için özel validate fonksiyonu bulunur

Form submit edildiğinde:

Boş alan kontrolü yapılır

Alanlara özel doğrulamalar çalışır

Hatalı alanlar kırmızı (is-invalid)

Doğru alanlar yeşil (is-valid) olur

📌 Geliştirme Notları
Kod yapısı modülerdir

Yeni alan eklemek için sadece fields dizisine ekleme yapmak yeterlidir

Backend entegrasyonuna uygundur

✍️ Geliştirici
Emre Aksu

GitHub: https://github.com/eemreaksu

📄 Lisans
Bu proje eğitim ve öğrenme amaçlı geliştirilmiştir.
