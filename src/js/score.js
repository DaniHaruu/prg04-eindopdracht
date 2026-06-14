import {FontUnit, Label, Color, Font, Vector} from "excalibur";

export class Score extends Label {
    score = 0;

    onInitialize(engine) {
        super.onInitialize(engine);
        {
            this.text = "Score: 0";
            this.font = new Font({
                family: 'Arial',
                size: 24,
                unit: FontUnit.Px,
                color: Color.Black
            })

            this.pos = new Vector(100, 50);
        }
    }

    incScore() {
        this.score++;
        this.text = `Score: ${this.score}`;
        console.log(`Score: ${this.score}`);
    }
}