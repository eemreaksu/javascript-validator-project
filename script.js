const form = document.getElementById('form');
const fields = [
    {
        el: document.getElementById('username'),
        validate: (val) => {
            if (val.length < 4) return 'Kullanıcı adı en az 4 karakter olmalı';
            if (val.length > 20) return 'Kullanıcı adı en fazla 20 karakter olabilir';
            return true;
        }
    },
    {
        el: document.getElementById('email'),
        msg: 'E-posta adresi giriniz',
        validate: (val) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val),
        invalidMsg: 'Geçerli bir e-posta adresi giriniz'
    },
    {
        el: document.getElementById('password'),
        validate: (val) => {
            if (val.length < 7) return 'Şifre en az 7 karakter olmalı';
            if (val.length > 20) return 'Şifre en fazla 20 karakter olabilir';
            return true;
        }
    },
    {
        el: document.getElementById('repassword'),
        validate: (val, allValues) => {
            const passwordVal = allValues.password;
            if (val !== passwordVal) return 'Şifreler eşleşmiyor';
            return true;
        }
    },
    {
        el: document.getElementById('phone'),
        msg: 'Telefon numarası giriniz',
        validate: (val) => {
            // Sadece rakam kontrolü + tam 10 hane
            if (!/^\d{10}$/.test(val)) {
                return 'Telefon numarası tam 10 haneli olmalı (örnek: 5123456789)';
            }
            // 5 ile başlamalı mı?
            if (val[0] !== '5') {
                return 'Telefon numarası 5 ile başlamalıdır';
            }
            return true;
        }
    }
];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Tüm input değerlerini topla (repassword karşılaştırması için)
    const values = {};
    fields.forEach(field => {
        const input = field.el;
        values[input.id] = input.value.trim();
    });

    fields.forEach(field => {
        const input = field.el;
        const val = values[input.id];
        const div = input.nextElementSibling;

        // Her seferinde temizle (önceki hatalar silinsin)
        input.classList.remove('is-invalid', 'is-valid');
        div.innerText = '';
        div.className = ''; // temizle

        // 1. Boş mu?
        if (val === '') {
            input.classList.add('is-invalid');
            div.innerText = field.msg || 'Bu alan zorunludur';
            div.className = 'invalid-feedback';
            return;
        }

        // 2. Özel doğrulama varsa çalıştır
        if (field.validate) {
            const result = field.validate(val, values); // values repassword için gerekli
            if (result !== true) {
                input.classList.add('is-invalid');
                div.innerText = result;
                div.className = 'invalid-feedback';
                return;
            }
        }

        // 3. Her şey tamam → yeşil tik
        input.classList.add('is-valid');
    });
});