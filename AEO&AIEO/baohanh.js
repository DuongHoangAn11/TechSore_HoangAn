/**
 * TOÀN BỘ CHIẾN LƯỢC AEO & AIEO FOR WARRANTY POLICY ENGINE (baohanh.html)
 * Quy hoạch cấu trúc dữ liệu theo sơ đồ thư mục phân tách độc lập
 * Vị trí lưu tệp: AEO&AIEO/baohanh.js
 */

document.addEventListener("DOMContentLoaded", function () {

    // =========================================================================
    // KHỐI KỸ THUẬT 1 (AIEO): Định danh cấu trúc thực thể Dịch vụ Bảo hành điện tử
    // =========================================================================
    const warrantyServiceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        // KỸ THUẬT AIEO: Định vị URL chính xác của trang bảo hành nằm trong thư mục dịch vụ
        "@id": "https://techstore.vn/dichvu/baohanh.html#service", 
        "name": "Dịch vụ Bảo hành điện tử chính hãng - TechStore",
        "description": "Chính sách bảo hành tiêu chuẩn từ 12 đến 24 tháng cho tất cả thiết bị công nghệ, hỗ trợ tiếp nhận đa kênh và xử lý kỹ thuật chuyên sâu.",
        "provider": {
            "@type": "Organization",
            "@id": "https://techstore.vn/#organization", // Đồng bộ đồng nhất về định danh gốc của thương hiệu mẹ
            "name": "TechStore",
            "url": "https://techstore.vn/"
        },
        "serviceType": "Official Warranty and Technical Repair Services",
        "areaServed": {
            "@type": "Country",
            "name": "Vietnam"
        }
    };

    // =========================================================================
    // KHỐI KỸ THUẬT 2 (AEO): Thiết lập mô hình câu hỏi đàm thoại dựa trên nội dung gốc
    // =========================================================================
    const warrantyFaqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Thời hạn bảo hành các thiết bị công nghệ mua tại TechStore là bao lâu và áp dụng cho lỗi nào?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tất cả các sản phẩm công nghệ do TechStore cung cấp đều được áp dụng gói bảo hành điện tử chính hãng từ 12 đến 24 tháng (tùy thuộc vào danh mục sản phẩm). Chính sách này áp dụng cho toàn bộ các lỗi kỹ thuật phát sinh từ phía nhà sản xuất."
                }
            },
            {
                "@type": "Question",
                "name": "TechStore có những hình thức tiếp nhận bảo hành nào và thời gian xử lý mất bao lâu?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TechStore cung cấp 4 hình thức tiếp nhận linh hoạt: gửi máy trực tiếp tại cửa hàng, gửi qua đường bưu điện, ủy quyền cho trung tâm bảo hành của hãng, hoặc sử dụng dịch vụ hỗ trợ bảo hành tận nhà/văn phòng. Thời gian xử lý kỹ thuật thông thường dao động từ 7 đến 15 ngày làm việc tùy thuộc vào mức độ hư hỏng và tình trạng linh kiện thay thế."
                }
            }
        ]
    };

    // =========================================================================
    // KHỐI KỸ THUẬT 3: Hàm tự động nhúng ngầm dữ liệu vào cấu trúc trang (DOM Injection)
    // =========================================================================
    function injectWarrantyEngine(schemaData) {
        const scriptElement = document.createElement('script');
        scriptElement.type = 'application/ld+json';
        scriptElement.text = JSON.stringify(schemaData);
        document.head.appendChild(scriptElement);
    }

    // Thực thi nạp đồng thời khối định danh thực thể (AIEO) và khối hỏi đáp chính sách (AEO)
    injectWarrantyEngine(warrantyServiceSchema);
    injectWarrantyEngine(warrantyFaqSchema);

    console.log("🛡️ AIEO & AEO Warranty Engine: Đã kích hoạt lõi quy trình bảo hành cho baohanh.html thành công.");
});