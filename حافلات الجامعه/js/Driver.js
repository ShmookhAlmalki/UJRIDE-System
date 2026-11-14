/**
 * UJRIDE - Driver Management Class
 * يختص هذا الكلاس بإدارة بيانات السائقين والحافلات المخصصة لهم
 */
class Driver {
    constructor(driverId, driverName, licenseNumber, assignedBusNumber, branch) {
        this.driverId = driverId;
        this.driverName = driverName;
        this.licenseNumber = licenseNumber;
        this.assignedBusNumber = assignedBusNumber;
        this.branch = branch; // مثال: فرع الفيصلية - جامعة جدة
        this.isOnline = false;
        this.currentLocation = { lat: 21.5433, lng: 39.1728 }; // الإحداثيات الابتدائية في جدة
    }

    // تسجيل دخول السائق وبدء العمل
    login() {
        this.isOnline = true;
        console.log(`السائق ${this.driverName} سجل دخوله بنجاح على الحافلة رقم ${this.assignedBusNumber}.`);
        return true;
    }

    // تحديث إحداثيات موقع السائق الحالي
    updateLocation(newLat, newLng) {
        if (!this.isOnline) {
            console.warn("لا يمكن تحديث الموقع، السائق غير متصل حالياً.");
            return;
        }
        this.currentLocation = { lat: newLat, lng: newLng };
        console.log(`تم تحديث موقع الحافلة ${this.assignedBusNumber} إلى: (${newLat}, ${newLng})`);
    }

    // تسجيل خروج السائق
    logout() {
        this.isOnline = false;
        console.log(`السائق ${this.driverName} انقطع عن الخدمة.`);
    }

    // جلب معلومات السائق والحافلة
    getDriverInfo() {
        return {
            id: this.driverId,
            name: this.driverName,
            bus: this.assignedBusNumber,
            branch: this.branch,
            status: this.isOnline ? "متصل (Online)" : "غير متصل (Offline)"
        };
    }
}

// تصدير الكلاس للاستخدام في الملفات الأخرى
export default Driver;