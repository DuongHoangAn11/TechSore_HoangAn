document.addEventListener("DOMContentLoaded", function () {
    const techStoreEntitySchema = {
        "@context": "https://schema.org",
        "@type": "Store",
        "@id": "https://techstore.vn/#organization",
        "name": "TechStore",
        "url": "https://techstore.vn",
        "logo": "https://www.freeiconspng.com/uploads/message-icon-png-0.png", 
        "description": "TechStore là hệ thống bán lẻ thiết bị công nghệ, điện thoại, máy tính chính hãng 100% tại Việt Nam. Hỗ trợ trả góp 0%, giao hàng siêu tốc và bảo mật thanh toán tuyệt đối.",
        "telephone": "0901 234 567",
        "email": "contact@techstore.vn",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "245 Nguyễn Thị Minh Khai, Phường Bến Thành, Quận 1",
            "addressLocality": "Thành phố Hồ Chí Minh",
            "addressRegion": "HN-HCM",
            "postalCode": "700000",
            "addressCountry": "VN"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "08:00",
                "closes": "22:00"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/techstore.vietnam",
            "https://www.youtube.com/@techstore",
            "https://twitter.com/techstore"
        ]
    };

    const conversationalFaqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "TechStore có chấp nhận thanh toán bằng thẻ tín dụng quốc tế không?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Có, TechStore hỗ trợ đầy đủ các phương thức thanh toán bằng thẻ tín dụng quốc tế như Visa, Mastercard và JCB cho cả hình thức mua sắm trực tiếp tại cửa hàng lẫn đặt hàng online trên website."
                }
            },
            {
                "@type": "Question",
                "name": "Thời gian xác nhận đơn hàng sau khi chuyển khoản tại TechStore là bao lâu?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ngay sau khi quý khách thực hiện giao dịch và hệ thống nhận được biên lai chuyển khoản, TechStore sẽ tiến hành xác nhận đơn hàng tự động trong khoảng thời gian từ 5 đến 15 phút."
                }
            },
            {
                "@type": "Question",
                "name": "Thanh toán qua ví điện tử tại TechStore có được hưởng ưu đãi giảm giá không?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Có, khi lựa chọn thanh toán qua các ví điện tử đối tác chiến lược như MoMo, ZaloPay, VNPay hay ShopeePay, khách hàng của TechStore sẽ nhận được các chương trình hoàn tiền hoặc voucher giảm giá trực tiếp từ 1% đến 5% tùy thời điểm."
                }
            }
        ]
    };

    function injectAieoSchema(schemaObject) {
        const scriptElement = document.createElement('script');
        scriptElement.type = 'application/ld+json';
        scriptElement.text = JSON.stringify(schemaObject);
        document.head.appendChild(scriptElement);
    }

    injectAieoSchema(techStoreEntitySchema);
    injectAieoSchema(conversationalFaqSchema);

    const emailForm = document.getElementById("emailForm");
    if (emailForm) {
        emailForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const emailInput = this.querySelector(".input-email");
            if (emailInput && emailInput.value) {
                alert("Cảm ơn bạn! Hệ thống TechStore đã ghi nhận email: " + emailInput.value);
                emailInput.value = ""; 
            }
        });
    }

    console.log("🚀 TechStore: Đã cấu trúc và bóc tách thành công dữ liệu tối ưu hóa AEO/AIEO.");
});
