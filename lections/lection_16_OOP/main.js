console.log('Lection 13');


/*
    Тезисы:
        xx-yy-zz - OOP Intro
        xx-yy-zz - Class, object
        xx-yy-zz - Inheritance
        xx-yy-zz - Incapsulation
        xx-yy-zz - Polymorphism - ?
*/


class Building {
    constructor(width) {
        this.width = width;
    }

    lightOn() {
        console.log('lights on');
    }
}

let marko = new Building(200);
let petro = new Building(260);

// console.log(marko);
// console.log(petro);

marko.lightOn();
petro.lightOn();


class Game {
    constructor(m = 5, n = 5) {
        let field = [];
        field.length = n;
        for(let i = 0; i < field.length; i++) {
            field[i] = new Array(m);
            for(let j = 0; j < field[i].length; j++) {
                field[i][j] = 0;
            }
        }

        this.field = field;
        this.player = {
            x: undefined,
            y: undefined
        }
    }

    setPlayer(x, y) {
        this.field[x][y] = 1;
        this.player.x = x;
        this.player.y = y;
    }

    move(direction, step) {
        this.field[this.player.x][this.player.y] = 0;

        switch(direction) {
            case 'left':
                this.setPlayer(this.player.x, this.player.y - step);
                break;
            case 'right':
                this.setPlayer(this.player.x, this.player.y + step);
                break;
            case 'top':
                this.setPlayer(this.player.x - step, this.player.y);
                break;
            case 'bottom':
                this.setPlayer(this.player.x + step, this.player.y);
                break;
        }
    }

    printFiled(){
        for(let i = 0; i < this.field.length; i++) {
            for(let j = 0; j < this.field[i].length; j++) {
                document.write(this.field[i][j] + ' '); 
            }
            document.write('<br />'); 
        }
        document.write('<hr />'); 
    }

    resizeField(m, n) {
        this.field.length = n;

        for(let i = 0; i < this.field.length; i++) {
            if (this.field[i]){
                this.field[i].length = m;
            } else {
                this.field[i] = new Array(m);
            }

            for(let j = 0; j < this.field[i].length; j++) {
                this.field[i][j] = this.field[i][j] || 0;
                // if (this.field[i][j]) {
                //     this.field[i][j] = this.field[i][j];
                // } else {
                //     this.field[i][j] = 0;
                // }
            }
        }
    }
}

let game = new Game(10, 10);

// game.printFiled();
// game.setPlayer(1, 1);
// game.printFiled();
// // game.move('left', 1);
// // game.printFiled();
// // game.move('top', 1);
// // game.printFiled();
// game.resizeField(15, 15);
// game.printFiled();