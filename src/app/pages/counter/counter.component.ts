import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    templateUrl: './counter.component.html',
    styleUrl: './counter.componet.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
    counter = 1000000;
    counterSignal = signal(10);

    constructor() {
        setInterval(() => {
            this.counterSignal.update((v) => v + 1);
            console.log('tick');
        }, 2000);
    }

    increaseBy(value: number) {
        this.counter += value;
        this.counterSignal.update(current => current + value);
    }

    decreaseBy() {
        this.counter = this.counter - 10;
    }

    resetCounter() {
        this.counter = 0;
        this.counterSignal.set(0)
    }
}