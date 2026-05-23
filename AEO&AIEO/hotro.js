document.addEventListener("DOMContentLoaded", function () {
    const customerSupportServiceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://techstore.vn/dichvu/hotro.html#service", 
        "name": "Dịch vụ Hỗ trợ kỹ thuật và Chăm sóc khách hàng 24/7",
        "description": "Trung tâm tiếp nhận yêu cầu, xử lý lỗi phần cứng và hỗ trợ cài đặt phần mềm thiết bị công nghệ liên tục mọi lúc mọi nơi.",
        "provider": {
            "@type": "Organization",
            "@id": "https://techstore.vn/#organization",
            "name": "TechStore",
            "url": "https://techstore.vn/"
        },
        "serviceType": "Customer Support and Technical Assistance",
        "areaServed": {
            "@type": "Country",
            "name": "Vietnam"
        },
        "availableChannel": {
            "@type": "ServiceChannel",
            "name": "Cổng tiếp nhận hỗ trợ đa kênh TechStore",
            "servicePhone": {
                "@type": "ContactPoint",
                "telephone": "+84901234567",
                "contactType": "customer service",
                "availableLanguage": ["Vietnamese", "English"]
            },
            "serviceUrl": "https://techstore.vn/Lienhe.html"
        }
    };
    
    const supportFaqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Làm thế nào để liên hệ với đội ngũ hỗ trợ kỹ thuật của TechStore khi gặp sự cố?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Khách hàng có thể liên hệ trực tiếp với TechStore thông qua số Hotline 0901 234 567 hoặc truy cập vào trang Liên hệ (Lienhe.html) để gửi tin nhắn yêu cầu cứu hộ kỹ thuật. Đội ngũ chuyên viên luôn sẵn sàng giải đáp và xử lý vấn đề của bạn."
                }
            },
            {
                "@type": "Question",
                "name": "Dịch vụ chăm sóc và hỗ trợ khách hàng tại TechStore có hoạt động vào ngày lễ không?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Có, dịch vụ hỗ trợ khách hàng của TechStore hoạt động liên tục 24/7, bao gồm cả ngày nghỉ cuối tuần và các ngày lễ Tết nhằm đảm bảo thiết bị công nghệ của bạn luôn vận hành ổn định không bị gián đoạn."
                }
            }
        ]
    };

    function injectAeoEngine(schemaData) {
        const scriptElement = document.createElement('script');
        scriptElement.type = 'application/ld+json';
        scriptElement.text = JSON.stringify(schemaData);
        document.head.appendChild(scriptElement);
    }

    injectAeoEngine(customerSupportServiceSchema);
    injectAeoEngine(supportFaqSchema);

    console.log("🛠️ AIEO & AEO Support Engine: Đã kích hoạt lõi dữ liệu cho hotro.html thành công.");
});
