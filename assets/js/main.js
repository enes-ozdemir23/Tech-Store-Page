// Ürünleri görüntüleme fonksiyonu
function displayProducts(products) {
    const container = document.getElementById('productContainer');
    container.innerHTML = '';

    products.forEach(product => {
        const productHTML = `
            <div class="col-md-4 mb-4">
                <div class="card product-card">
                    <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                    <span class="category-badge">${product.category}</span>
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price}</p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productHTML;
    });
}

// Filtreleme fonksiyonu
function filterProducts(category) {
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filtered = products.filter(product => product.category === category);
        displayProducts(filtered);
    }
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    // Ürünleri göster
    displayProducts(products);
    
    // Toastr ayarları
    toastr.options = {
        "closeButton": true,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "timeOut": "3000"
    };

    // İletişim formu gönderimi
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Form verilerini al
        const formData = new FormData(this);
        
        // Normalde burada bir API'ye gönderilir
        // Şimdilik başarılı mesajı gösterelim
        toastr.success('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.', 'Başarılı!');
        
        // Formu temizle
        this.reset();
    });

    // Sayfa kaydırma animasyonu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Navbar scroll efekti
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = 'var(--primary-color)';
        navbar.style.boxShadow = 'none';
    }
});

// Ürün detay modalı
function showProductDetails(product) {
    toastr.info(`${product.name} detayları görüntüleniyor...`);
}

// Sayfa yüklenme animasyonu
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});