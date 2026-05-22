/**
 * TOÀN BỘ CHIẾN LƯỢC AEO & AIEO VÀ LOGIC XỬ LÝ FORM TRANG LIÊN HỆ
 * Quy hoạch đồng bộ chung vào 1 tệp Javascript duy nhất
 */

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // KHỐI KỸ THUẬT 1 (AIEO): Xác thực địa lý NAP
    // ==========================================
    const techStoreContactGeoSchema = {
        "@context": "https://schema.org",
        "@type": "Store",
        "@id": "https://techstore.vn/#organization",
        "name": "TechStore",
        "image": "https://www.freeiconspng.com/uploads/message-icon-png-0.png",
        "telephone": "+84901234567",
        "email": "contact@techstore.vn",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "245 Nguyễn Thị Minh Khai, Phường Bến Thành, Quận 1",
            "addressLocality": "Thành phố Hồ Chí Minh",
            "addressRegion": "HN-HCM",
            "postalCode": "700000",
            "addressCountry": "VN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "10.7715",
            "longitude": "106.6904"
        }
    };

    // ==========================================
    // KHỐI KỸ THUẬT 2 (AEO): Hỏi đáp đàm thoại
    // ==========================================
    const contactSupportFaqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Số điện thoại tổng đài hotline và địa chỉ email chính thức của TechStore là gì?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Số điện thoại hotline hỗ trợ khách hàng chính thức của TechStore là 0901 234 567 và địa chỉ email tiếp nhận thông tin là contact@techstore.vn."
                }
            },
            {
                "@type": "Question",
                "name": "Thời gian mở cửa hoạt động của cửa hàng TechStore Quận 1 là khung giờ nào?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Cửa hàng TechStore tại địa chỉ 245 Nguyễn Thị Minh Khai, Quận 1 mở cửa hoạt động liên tục từ 08:00 sáng đến 22:00 đêm vào tất cả các ngày trong tuần."
                }
            }
        ]
    };

    // ==========================================
    // KHỐI KỸ THUẬT 3: Hàm tự động nhúng (Inject)
    // ==========================================
    function injectSchemaToHead(schemaObject) {
        const scriptElement = document.createElement('script');
        scriptElement.type = 'application/ld+json';
        scriptElement.text = JSON.stringify(schemaObject);
        document.head.appendChild(scriptElement);
    }

    // Thực thi nhúng dữ liệu ngữ nghĩa vào trang web
    injectSchemaToHead(techStoreContactGeoSchema);
    injectSchemaToHead(contactSupportFaqSchema);

    console.log("📍 Đã kích hoạt toàn bộ lõi dữ liệu AEO/AIEO trong cùng một tệp Lienhe.js");
});

// =========================================================================
// KHỐI XỬ LÝ FORM: Kiểm tra dữ liệu nhập vào (Validation)
// =========================================================================
function validate1() {
    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const tinnhan = document.getElementById("tinnhan").value.trim();

    const nameerror = document.getElementById("error-name");
    const emailerror = document.getElementById("error-email");
    const mesgerror = document.getElementById("error-tinnhan");

    nameerror.innerHTML = "";
    emailerror.innerHTML = "";
    mesgerror.innerHTML = "";

    const nameRegex = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲÝYỶỸỳýyỷỹ\s]{2,50}$/;
    const emailRegex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (name === "") {
        nameerror.innerHTML = "Vui lòng điền họ và tên!";
        isValid = false;
    } else if (!nameRegex.test(name)) {
        nameerror.innerHTML = "Họ và tên không hợp lệ (Chỉ chấp nhận chữ cái, và phải từ 2-50 ký tự)";
        isValid = false;
    }

    if (email === "") {
        emailerror.innerHTML = "Vui lòng điền vào email!";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailerror.innerHTML = "Định dạng email không hợp lệ (Ví dụ đúng: example@domain.com)!";
        isValid = false;
    }

    // 3. Kiểm tra trường Tin nhắn
    if (tinnhan === "") {
        mesgerror.innerHTML = "Vui lòng điền vào nội dung tin nhắn!";
        isValid = false;
    }

    // Xử lý khi tất cả các trường dữ liệu đều hợp lệ
    if (isValid) {
        alert("Gửi thông tin liên hệ thành công!");
        document.querySelector("form").reset(); // Reset giao diện form về trạng thái trống
    }

    return false; // Ngăn chặn trang web bị tải lại (Reload) sau khi nhấn submit
}