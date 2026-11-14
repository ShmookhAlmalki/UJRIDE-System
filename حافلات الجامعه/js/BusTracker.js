/**
 * UJRIDE - Bus Live Tracking Class
 * يختص هذا الكلاس بإدارة الخريطة التفاعلية وتتبع حركة الحافلات في الوقت الفعلي
 */
class BusTracker {
    constructor(mapContainerId, initialCoords = [21.5433, 39.1728], zoomLevel = 13) {
        this.mapContainerId = mapContainerId;
        this.initialCoords = initialCoords;
        this.zoomLevel = zoomLevel;
        this.map = null;
        this.busMarkers = new Map(); // تخزين علامات الحافلات لكل حافلة
        this.routePolylines = new Map(); // تخزين مسارات الرحلات
        
        this.initMap();
    }

    // تهيئة الخريطة باستخدام مكتبة Leaflet.js
    initMap() {
        this.map = L.map(this.mapContainerId).setView(this.initialCoords, this.zoomLevel);
        
        // استخدام خرائط ذات تصميم أنيق ومناسب للمشروع
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            maxZoom: 19,
            attribution: '&copy; UJRIDE - University of Jeddah'
        }).addTo(this.map);
    }

    // إضافة أو تحديث موقع حافلة على الخريطة
    updateBusPosition(busNumber, lat, lng, popupHtml = "") {
        if (this.busMarkers.has(busNumber)) {
            // تحديث الموقع الحالي للحافلة إذا كانت موجودة مسبقاً
            const marker = this.busMarkers.get(busNumber);
            marker.setLatLng([lat, lng]);
            if (popupHtml) {
                marker.bindPopup(popupHtml);
            }
        } else {
            // إنشاء علامة جديدة للحافلة إذا ظهرت لأول مرة
            const marker = L.marker([lat, lng]).addTo(this.map);
            if (popupHtml) {
                marker.bindPopup(popupHtml).openPopup();
            }
            this.busMarkers.set(busNumber, marker);
        }
    }

    // رسم مسار الرحلة المحسوب (مثلاً عبر خوارزمية دايكسترا)
    drawRoutePath(routeId, latLngCoordinates, color = '#0056b3') {
        // حذف المسار القديم إن وجد لتحديثه
        if (this.routePolylines.has(routeId)) {
            this.map.removeLayer(this.routePolylines.get(routeId));
        }

        const polyline = L.polyline(latLngCoordinates, {
            color: color,
            weight: 5,
            opacity: 0.8
        }).addTo(this.map);

        this.routePolylines.set(routeId, polyline);
        
        // ضبط حدود الخريطة لتشمل المسار بالكامل
        this.map.fitBounds(polyline.getBounds(), { padding: [50, 50] });
    }

    // إزالة الحافلة من الخريطة عند انتهاء الرحلة
    removeBus(busNumber) {
        if (this.busMarkers.has(busNumber)) {
            this.map.removeLayer(this.busMarkers.get(busNumber));
            this.busMarkers.delete(busNumber);
        }
    }
}

export default BusTracker;