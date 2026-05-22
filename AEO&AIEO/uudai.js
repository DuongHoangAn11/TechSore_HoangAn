/**
 * TOÀN BỘ CHIẾN LƯỢC AEO & AIEO FOR PROMOTION & INCENTIVE ENGINE (uudai.html)
 * Quy hoạch cấu trúc dữ liệu theo sơ đồ thư mục phân tách độc lập
 * Vị trí lưu tệp: AEO&AIEO/uudai.js
 */

document.addEventListener("DOMContentLoaded", function () {

    // =========================================================================
    // KHỐI KỸ THUẬT 1 (AIEO): Định danh cấu trúc thực thể Dịch vụ Ưu đãi & Trợ giá
    // =========================================================================
    const promotionServiceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        // KỸ THUẬT AIEO: Định vị URL chính xác của trang ưu đãi nằm trong thư mục dịch vụ
        "@id": "https://techstore.vn/dichvu/uudai.html#service", 
        "name": "Chương trình Ưu đãi độc quyền và Tài trợ tín dụng - TechStore",
        "description": "Giải pháp hỗ trợ tài chính trả góp 0% lãi suất, ngày hội thành viên giảm giá và các sự kiện săn deal công nghệ giờ vàng.",
        "provider": {
            "@type": "Organization",
            "@id": "https://techstore.vn/#organization", // Kết nối ngữ nghĩa đồng bộ về thương hiệu mẹ TechStore
            "name": "TechStore",
            "url": "https://techstore.vn/"
        },
        "serviceType": "Financial Incentives and Retail Promotions",
        "areaServed": {
            "@type": "Country",
            "name": "Vietnam"
        }
    };

    // =========================================================================
    // KHỐI KỸ THUẬT 2 (AEO): Thiết lập mô hình câu hỏi đàm thoại dựa trên nội dung ưu đãi gốc
    // =========================================================================
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

    // =========================================================================
    // KHỐI KỸ THUẬT 3: Hàm tự động nhúng ngầm dữ liệu vào cấu trúc trang (DOM Injection)
    // =========================================================================
    function injectPromotionEngine(schemaData) {
        const scriptElement = document.createElement('script');
        scriptElement.type = 'application/ld+json';
        scriptElement.text = JSON.stringify(schemaData);
        document.head.appendChild(scriptElement);
    }

    // Thực thi nạp đồng thời khối định danh thực thể ưu đãi (AIEO) và khối hỏi đáp đàm thoại (AEO)
    injectPromotionEngine(promotionServiceSchema);
    injectPromotionEngine(promotionFaqSchema);

    console.log("🎁 AIEO & AEO Promotion Engine: Đã kích hoạt lõi dữ liệu ưu đãi cho uudai.html thành công.");
});