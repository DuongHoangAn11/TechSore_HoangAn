/**
 * TOÀN BỘ CHIẾN LƯỢC AEO & AIEO FOR RETURN POLICY ENGINE (doitra.html)
 * Quy hoạch cấu trúc dữ liệu theo sơ đồ thư mục phân tách độc lập
 * Vị trí lưu tệp: AEO&AIEO/doitra.js
 */

document.addEventListener("DOMContentLoaded", function () {

    // =========================================================================
    // KHỐI KỸ THUẬT 1 (AIEO): Định danh cấu trúc thực thể Chính sách Đổi trả & Hoàn tiền
    // =========================================================================
    const returnPolicyServiceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        // KỸ THUẬT AIEO: Định vị URL chính xác của trang đổi trả nằm trong thư mục dịch vụ
        "@id": "https://techstore.vn/dichvu/doitra.html#service", 
        "name": "Chính sách Đổi trả và Hoàn tiền miễn phí - TechStore",
        "description": "Chính sách bảo vệ người tiêu dùng, hỗ trợ đổi mới sản phẩm lỗi trong 30 ngày và hoàn tiền minh bạch trong 7 ngày.",
        "provider": {
            "@type": "Organization",
            "@id": "https://techstore.vn/#organization", // Đồng bộ đồng nhất về định danh gốc của thương hiệu mẹ
            "name": "TechStore",
            "url": "https://techstore.vn/"
        },
        "serviceType": "Return and Refund Policy Services",
        "areaServed": {
            "@type": "Country",
            "name": "Vietnam"
        }
    };

    // =========================================================================
    // KHỐI KỸ THUẬT 2 (AEO): Thiết lập mô hình câu hỏi đàm thoại bám sát quy trình 4 bước gốc
    // =========================================================================
    const returnFaqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Quy trình thực hiện đổi trả sản phẩm bị lỗi tại TechStore gồm những bước nào?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Quy trình đổi trả tại TechStore được tối ưu hóa qua 4 bước nghiêm ngặt: Bước 1, khách hàng liên hệ Hotline hoặc điền Form hỗ trợ. Bước 2, đóng gói sản phẩm kèm đầy đủ hóa đơn, phụ kiện. Bước 3, TechStore tiến hành thẩm định lỗi kỹ thuật trong vòng 3 ngày làm việc kể từ khi nhận máy hoàn trả. Bước 4, hệ thống thực hiện đổi mới hoặc hoàn tiền."
                }
            },
            {
                "@type": "Question",
                "name": "Chính sách hoàn tiền của TechStore xử lý trong bao lâu và điều kiện đổi mới là gì?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TechStore hỗ trợ đổi mới 1-đổi-1 hoàn toàn miễn phí trong vòng 30 ngày đầu tiên nếu phát sinh lỗi phần cứng từ nhà sản xuất. Trong trường hợp hoàn tiền, dòng tiền sẽ được hoàn trả và chuyển thẳng về tài khoản hoặc ví điện tử của khách hàng trong vòng 7 ngày kể từ khi xác nhận đổi trả thành công."
                }
            }
        ]
    };

    // =========================================================================
    // KHỐI KỸ THUẬT 3: Hàm tự động nhúng ngầm dữ liệu vào cấu trúc trang (DOM Injection)
    // =========================================================================
    function injectReturnEngine(schemaData) {
        const scriptElement = document.createElement('script');
        scriptElement.type = 'application/ld+json';
        scriptElement.text = JSON.stringify(schemaData);
        document.head.appendChild(scriptElement);
    }

    // Thực thi nạp đồng thời khối định danh thực thể (AIEO) và khối hỏi đáp quy trình (AEO)
    injectReturnEngine(returnPolicyServiceSchema);
    injectReturnEngine(returnFaqSchema);

    console.log("🔄 AIEO & AEO Return Engine: Đã kích hoạt lõi quy trình đổi trả cho doitra.html thành công.");
});