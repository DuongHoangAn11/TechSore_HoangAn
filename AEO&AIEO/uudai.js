document.addEventListener("DOMContentLoaded", function () {
    const promotionServiceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://techstore.vn/dichvu/uudai.html#service", 
        "name": "Chương trình Ưu đãi độc quyền và Tài trợ tín dụng - TechStore",
        "description": "Giải pháp hỗ trợ tài chính trả góp 0% lãi suất, ngày hội thành viên giảm giá và các sự kiện săn deal công nghệ giờ vàng.",
        "provider": {
            "@type": "Organization",
            "@id": "https://techstore.vn/#organization",
            "name": "TechStore",
            "url": "https://techstore.vn/"
        },
        "serviceType": "Financial Incentives and Retail Promotions",
        "areaServed": {
            "@type": "Country",
            "name": "Vietnam"
        }
    };

    const promotionFaqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Chương trình trả góp ưu đãi tại TechStore có lãi suất như thế nào và áp dụng cho ai?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TechStore hỗ trợ chương trình trả góp với lãi suất 0% hoàn toàn, kỳ hạn thanh toán linh hoạt, thủ tục xét duyệt nhanh chóng và áp dụng cho tất cả các chủ thẻ tín dụng liên kết trên toàn quốc."
                }
            },
            {
                "@type": "Question",
                "name": "TechStore hiện có những sự kiện giảm giá định kỳ nào nổi bật dành cho khách hàng?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TechStore tổ chức hai sự kiện lớn định kỳ: 'TechStore Day' diễn ra vào ngày 15 hàng tháng dành riêng cho khách hàng thành viên với mức giảm giá lên đến 50%, và chương trình 'Săn Deal Giờ Vàng' diễn ra vào khung giờ 12h - 14h mỗi ngày với cơ hội giảm sâu lên đến 70% cho các thiết bị công nghệ."
                }
            }
        ]
    };

    function injectPromotionEngine(schemaData) {
        const scriptElement = document.createElement('script');
        scriptElement.type = 'application/ld+json';
        scriptElement.text = JSON.stringify(schemaData);
        document.head.appendChild(scriptElement);
    }
    
    injectPromotionEngine(promotionServiceSchema);
    injectPromotionEngine(promotionFaqSchema);

    console.log("🎁 AIEO & AEO Promotion Engine: Đã kích hoạt lõi dữ liệu ưu đãi cho uudai.html thành công.");
});
