/**
 * TOÀN BỘ CHIẾN LƯỢC AEO & AIEO FOR PAYMENT SECURE ENGINE (Thanhtoan.html)
 * Quy hoạch cấu trúc dữ liệu theo sơ đồ thư mục phân tách độc lập
 * Vị trí lưu tệp: AEO&AIEO/thanhtoan.js
 */

document.addEventListener("DOMContentLoaded", function () {

    // =========================================================================
    // KHỐI KỸ THUẬT 1 (AIEO): Định danh cấu trúc thực thể Giải pháp Thanh toán
    // =========================================================================
    const paymentServiceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        // KỸ THUẬT AIEO: Định vị URL chính xác của trang thanh toán nằm trong thư mục dịch vụ
        "@id": "https://techstore.vn/dichvu/thanhtoan.html#service", 
        "name": "Cổng giải pháp Thanh toán đa kênh bảo mật - TechStore",
        "description": "Hạ tầng tích hợp các phương thức thanh toán an toàn, bảo mật tuyệt đối cho mọi giao dịch mua sắm thiết bị công nghệ.",
        "provider": {
            "@type": "Organization",
            "@id": "https://techstore.vn/#organization", // Kết nối ngữ nghĩa đồng bộ về thực thể mẹ TechStore
            "name": "TechStore",
            "url": "https://techstore.vn/"
        },
        "serviceType": "Financial Transaction and Payment Processing Services",
        "areaServed": {
            "@type": "Country",
            "name": "Vietnam"
        }
    };

    // =========================================================================
    // KHỐI KỸ THUẬT 2 (AEO): Cấu trúc câu hỏi đàm thoại làm mịn dựa trên khối FAQ gốc
    // =========================================================================
    const paymentFaqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "TechStore hỗ trợ các hình thức thanh toán nào khi mua thiết bị công nghệ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TechStore cung cấp 4 phương thức thanh toán linh hoạt: Thanh toán bằng tiền mặt khi nhận hàng (COD) hoặc tại quầy; Chuyển khoản ngân hàng 24/7; Quẹt thẻ tín dụng/ghi nợ (VISA, Mastercard, JCB); và các ví điện tử thông dụng như MoMo, VNPAY, ZaloPay."
                }
            },
            {
                "@type": "Question",
                "name": "Giao dịch thanh toán chuyển khoản tại TechStore mất bao lâu để xác nhận và có an toàn không?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Thông thường, hệ thống tài chính của TechStore sẽ xác nhận giao dịch chuyển khoản lập tức trong vòng 2 - 5 phút và tự động gửi biên lai qua Email/SMS. Toàn bộ thông tin thẻ và tài khoản của khách hàng đều được mã hóa bằng tiêu chuẩn bảo mật SSL cao cấp nhất, cam kết an toàn tuyệt đối."
                }
            },
            {
                "@type": "Question",
                "name": "Mua hàng tại TechStore có được xuất hóa đơn VAT không và thanh toán qua ví điện tử có ưu đãi gì?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Có, tất cả sản phẩm mua tại TechStore đều hỗ trợ xuất hóa đơn điện tử VAT miễn phí theo yêu cầu của khách hàng. Ngoài ra, khi thực hiện thanh toán qua ví điện tử, khách hàng còn có cơ hội nhận thêm các mã giảm giá đặc biệt tùy thuộc vào chương trình ưu đãi đang diễn ra."
                }
            }
        ]
    };

    // =========================================================================
    // KHỐI KỸ THUẬT 3: Hàm tự động nhúng ngầm dữ liệu vào cấu trúc trang (DOM Injection)
    // =========================================================================
    function injectPaymentEngine(schemaData) {
        const scriptElement = document.createElement('script');
        scriptElement.type = 'application/ld+json';
        scriptElement.text = JSON.stringify(schemaData);
        document.head.appendChild(scriptElement);
    }

    // Thực thi nạp đồng thời khối định danh cổng thanh toán (AIEO) và khối đàm thoại hỏi đáp (AEO)
    injectPaymentEngine(paymentServiceSchema);
    injectPaymentEngine(paymentFaqSchema);

    console.log("💳 AIEO & AEO Payment Engine: Đã hoàn tất đồng bộ lõi bảo mật giao dịch cho Thanhtoan.html");
});