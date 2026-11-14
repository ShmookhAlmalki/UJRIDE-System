const UJRIDE_DATA = {
    fleet: [
        { bus_id: "BUS-201", operator_company: "شركة مسارات الخير للنقل", license_plate: "ABJ 1234", bus_model: "Toyota Coaster", assigned_branch: "فرع الفيصلية", capacity: 30, available_seats: 5, status: "نشطة", driver: "أحمد القحطاني", route: "R101" },
        { bus_id: "BUS-202", operator_company: "شركة مسارات الخير للنقل", license_plate: "HKD 5678", bus_model: "Toyota Coaster", assigned_branch: "فرع الفيصلية", capacity: 30, available_seats: 2, status: "نشطة", driver: "سعيد الزهراني", route: "R102" },
        { bus_id: "BUS-203", operator_company: "شركة مسارات الخير للنقل", license_plate: "RZS 9012", bus_model: "Mitsubishi Fuso", assigned_branch: "فرع الفيصلية", capacity: 25, available_seats: 8, status: "نشطة", driver: "خالد الغامدي", route: "R103" },
        { bus_id: "BUS-150", operator_company: "شركة التميز للنقل", license_plate: "SDT 3456", bus_model: "Toyota Coaster", assigned_branch: "فرع الفيصلية", capacity: 25, available_seats: 0, status: "ممتلئة", driver: "فهد الحربي", route: "R104" },
        { bus_id: "BUS-49", operator_company: "شركة الرواد للنقل الحافلات", license_plate: "EGF 7890", bus_model: "Hyundai County", assigned_branch: "فرع الفيصلية", capacity: 20, available_seats: 4, status: "نشطة", driver: "ماجد السلمي", route: "R105" },
        { bus_id: "BUS-50", operator_company: "شركة الرواد للنقل الحافلات", license_plate: "QKL 2345", bus_model: "Hyundai County", assigned_branch: "فرع الفيصلية", capacity: 20, available_seats: 1, status: "نشطة", driver: "عبدالله الشهري", route: "R106" },
        { bus_id: "BUS-07", operator_company: "شركة الفرسان للنقل", license_plate: "MNH 6789", bus_model: "Toyota Coaster", assigned_branch: "فرع الفيصلية", capacity: 30, available_seats: 12, status: "نشطة", driver: "طلال العتيبي", route: "R101" },
        { bus_id: "BUS-08", operator_company: "شركة الفرسان للنقل", license_plate: "WYA 1122", bus_model: "Mitsubishi Fuso", assigned_branch: "فرع الفيصلية", capacity: 25, available_seats: 3, status: "نشطة", driver: "ياسر المالكي", route: "R102" },
        { bus_id: "BUS-115", operator_company: "شركة الأفق للنقل", license_plate: "BTT 3344", bus_model: "Hyundai County", assigned_branch: "فرع الفيصلية", capacity: 22, available_seats: 0, status: "صيانة", driver: "عمر الجهني", route: "-" },
        { bus_id: "BUS-120", operator_company: "شركة الإنجاز للنقل الجامعي", license_plate: "JHK 5566", bus_model: "Toyota Coaster", assigned_branch: "فرع الفيصلية", capacity: 30, available_seats: 7, status: "نشطة", driver: "ناصر الدوسري", route: "R103" }
    ],
    students: [
        { id: "2310100", name: "نورة الغامدي", district: "حي الصفا", stop: "الصفا - نقطة افتراضية 01", route: "R101", bus_id: "BUS-201", boarded: true, status: "مسجلة" },
        { id: "2316427", name: "شموخ المالكي", district: "حي الفيصلية", stop: "الفيصلية - نقطة افتراضية 03", route: "R101", bus_id: "BUS-201", boarded: true, status: "مسجلة" },
        { id: "2310330", name: "وجدان الغامدي", district: "حي الصفا", stop: "الصفا - نقطة افتراضية 04", route: "R104", bus_id: "BUS-07", boarded: false, status: "مسجلة" },
        { id: "2313656", name: "ريناد فوزي", district: "حي المروة", stop: "المروة - نقطة افتراضية 02", route: "R102", bus_id: "BUS-202", boarded: true, status: "مسجلة" },
        { id: "2317502", name: "أسيل عسكر", district: "حي الصفا", stop: "الصفا - نقطة افتراضية 01", route: "R101", bus_id: "BUS-201", boarded: false, status: "مسجلة" },
        { id: "2316658", name: "رؤى الثقفي", district: "حي المروة", stop: "المروة - نقطة افتراضية 01", route: "R102", bus_id: "BUS-202", boarded: true, status: "مسجلة" },
        { id: "2310116", name: "دانا الشهري", district: "حي المروة", stop: "المروة - نقطة افتراضية 03", route: "R103", bus_id: "BUS-203", boarded: false, status: "مسجلة" },
        { id: "2310133", name: "غلا الجهني", district: "حي الصفا", stop: "الصفا - نقطة افتراضية 05", route: "R105", bus_id: "BUS-49", boarded: true, status: "مسجلة" }
    ],
    routes: [
        { route_id: "R101", origin: "حي الصفا", destination: "فرع الفيصلية", bus_id: "BUS-201", efficiency: "98%", status: "في الطريق" },
        { route_id: "R102", origin: "حي المروة", destination: "فرع الفيصلية", bus_id: "BUS-202", efficiency: "90%", status: "في الانتظار" },
        { route_id: "R103", origin: "حي الصفا", destination: "فرع الفيصلية", bus_id: "BUS-203", efficiency: "92%", status: "في الانتظار" },
        { route_id: "R104", origin: "حي الصفا", destination: "فرع الفيصلية", bus_id: "BUS-07", efficiency: "99%", status: "في الطريق" },
        { route_id: "R105", origin: "حي المروة", destination: "فرع الفيصلية", bus_id: "BUS-49", efficiency: "88%", status: "في الانتظار" },
        { route_id: "R106", origin: "حي المروة", destination: "فرع الفيصلية", bus_id: "BUS-50", efficiency: "97%", status: "في الطريق" }
    ],
    roadSegmentsSample: [
        { u: "506414938", v: "1473563376", name: "شارع الأمير سعود الفيصل", highway: "primary", length: 46.74 },
        { u: "506415311", v: "4418668562", name: "طريق صاري", highway: "primary", length: 90.82 },
        { u: "506415404", v: "1783219398", name: "شارع الشيخ عبد العزيز بن باز", highway: "primary", length: 207.48 },
        { u: "506415459", v: "506415357", name: "طريق الأمير ماجد", highway: "trunk", length: 265.21 },
        { u: "506798397", v: "506798417", name: "طريق الأمير متعب بن عبد العزيز", highway: "primary", length: 86.06 }
    ]
};