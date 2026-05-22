/**
 * TOÀN BỘ CHIẾN LƯỢC AEO & AIEO CHO TRANG DỊCH VỤ GIAO HÀNG (Cấu trúc thư mục mới)
 * File đặt tại: AEO&AIEO/giaohang.js
 */

document.addEventListener("DOMContentLoaded", function () {

    // =========================================================================
    // KHỐI KỸ THUẬT 1 (AIEO): Cập nhật URL chính xác theo cấu trúc thư mục mới
    // =========================================================================
    const deliveryServiceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        // KỸ THUẬT: Thêm /dichvu/ vào URL để AI xác định đúng vị trí trang thực tế
        "@id": "https://techstore.vn/dichvu/giaohang.html#service", 
        "name": "Dịch vụ Giao hàng nhanh chóng - TechStore",
        "description": "Giải pháp vận chuyển hỏa tốc nội thành trong 1-2h và chuyển phát nhanh toàn quốc kèm mã vận đơn theo dõi.",
        "provider": {
            "@type": "Organization",
            "@id": "https://techstore.vn/#organization", // Giữ nguyên ID tổng thể của thương hiệu mẹ
            "name": "TechStore",
            "url": "https://techstore.vn/"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Vietnam"
        },
        "serviceType": "Vận chuyển và Giao nhận thiết bị công nghệ",
        // KỸ THUẬT: Cập nhật đường dẫn điều khoản dịch vụ mới cho AI rà quét
        "termsOfService": "https://techstore.vn/dichvu/giaohang.html"
    };

    // =========================================================================
    // KHỐI KỸ THUẬT 2 (AEO): Cấu trúc câu hỏi đàm thoại (Giữ nguyên nội dung dữ liệu)
    // =========================================================================
    const deliveryFaqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Thời gian giao hàng hỏa tốc nội thành của TechStore là bao lâu?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TechStore cam kết giao hàng hỏa tốc trong vòng 1 đến 2 giờ đối với khách hàng thuộc khu vực nội thành TP. Hồ Chí Minh ngay sau khi đơn hàng được xác nhận."
                }
            },
            {
                "@type": "Question",
                "name": "TechStore hợp tác với những đơn vị vận chuyển nào và có được kiểm tra hàng không?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TechStore hợp tác với các đơn vị chuyển phát uy tín như Giao Hàng Nhanh, Giao Hàng Tiết Kiệm, Viettel Post, J&T Express. Khách hàng hoàn toàn được quyền mở hộp kiểm tra sản phẩm trước khi thanh toán (COD) và theo dõi lộ trình qua mã vận đơn."
                }
            },
            {
                "@type": "Question",
                "name": "Chính sách miễn phí vận chuyển tại TechStore áp dụng như thế nào?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Mọi đơn hàng mua thiết bị công nghệ có tổng giá trị hóa đơn từ 5.000.000 VNĐ trở lên sẽ được áp dụng chính sách miễn phí vận chuyển hoàn toàn trên phạm vi toàn quốc."
                }
            }
        ]
    };

    // =========================================================================
    // KHỐI KỸ THUẬT 3: Hàm tự động nhúng ngầm dữ liệu (Injection Engine)
    // =========================================================================
    function injectSchemaToHead(schemaData) {
        const scriptElement = document.createElement('script');
        scriptElement.type = 'application/ld+json';
        scriptElement.text = JSON.stringify(schemaData);
        document.head.appendChild(scriptElement);
    }

    // Thực thi nạp đồng thời khối định danh thực thể (AIEO) và khối hỏi đáp (AEO)
    injectSchemaToHead(deliveryServiceSchema);
    injectSchemaToHead(deliveryFaqSchema);

    console.log("🚚 AIEO & AEO Vận chuyển: Đã đồng bộ thành công theo cấu trúc thư mục mới.");
});