export class EventEmitter<T extends Function> {
    events = new Map<string, Set<T>>();
    
    on(name: string, handler: T) {
        if (!this.events.has(name)) {
            const set = new Set<T>();
            set.add(handler);
            this.events.set(name, set);
            return;
        }

        const listeners = this.events.get(name);

        listeners.add(handler);
    }

    off(name: string, handler?: T) {
        const listeners = this.events.get(name) ;

        if (listeners && !handler) { 
            listeners.clear();
        } else if (listeners && handler && listeners.has(handler)) {
            listeners.delete(handler);
        }
    }

    trigger(name: string) {
        const listeners = this.events.get(name);

        if (listeners) {
            for (const listener of listeners.values()) {
                listener();
            }
        }
    }

    once(name, handler) {
        function removeMe () {
            handler();
            this.off(name, removeMe);
        };

        this.on(name, removeMe);
    }
}
