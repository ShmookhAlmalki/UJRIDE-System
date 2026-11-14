class DijkstraEngine {
    constructor() {
        this.graph = {
            'حي الصفا': {'حي المروة': 8, 'جامعة جدة - فرع الفيصلية': 22},
            'حي المروة': {'حي الصفا': 8, 'حي النزهة': 10, 'جامعة جدة - فرع الفيصلية': 18},
            'حي النزهة': {'حي المروة': 10, 'حي السلامة': 7, 'جامعة جدة - فرع الفيصلية': 15},
            'حي السلامة': {'حي النزهة': 7, 'حي الشاطئ': 12, 'جامعة جدة - فرع الفيصلية': 14},
            'حي الشاطئ': {'حي السلامة': 12, 'حي الحمراء': 15, 'جامعة جدة - فرع الفيصلية': 25},
            'حي الحمراء': {'حي الشاطئ': 15, 'جامعة جدة - فرع الفيصلية': 20},
            'جامعة جدة - فرع الفيصلية': {}
        };
    }

    getShortestRoute(startDistrict, target = 'جامعة جدة - فرع الفيصلية') {
        if (!this.graph[startDistrict]) {
            return { time: 20, path: [startDistrict, target] };
        }

        let distances = {};
        let previous = {};
        let nodes = new Set();

        for (let vertex in this.graph) {
            distances[vertex] = vertex === startDistrict ? 0 : Infinity;
            previous[vertex] = null;
            nodes.add(vertex);
        }

        while (nodes.size) {
            let smallest = Array.from(nodes).reduce((minNode, node) => 
                distances[node] < distances[minNode] ? node : minNode, Array.from(nodes)[0]);

            if (smallest === target || distances[smallest] === Infinity) break;
            nodes.delete(smallest);

            for (let neighbor in this.graph[smallest]) {
                let alt = distances[smallest] + this.graph[smallest][neighbor];
                if (alt < distances[neighbor]) {
                    distances[neighbor] = alt;
                    previous[neighbor] = smallest;
                }
            }
        }

        let path = [];
        let current = target;
        while (current) {
            path.unshift(current);
            current = previous[current];
        }

        return { time: distances[target], path: path };
    }
}