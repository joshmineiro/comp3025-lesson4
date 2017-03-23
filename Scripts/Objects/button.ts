module objects {
    export class Button extends createjs.Bitmap {
        //CONSTRUCTOR ++++++++++++++++++++++++++++++
        constructor(public imagePath: string,
            x: number, y: number, public centred: boolean) {
            super(imagePath);
            this.Start();
            this.x = x;
            this.y = y;

            this.on("mouseover", this._Over);
            this.on("mouseout", this._Out);

        }

        //public methods ++++++++++++++++++++++++++++
        public Start(): void {
            if (this.centred) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }
        }
        
        //private methods +++++++++++++++++++++++++++++

        private _Over(event:createjs.MouseEvent):void{
            this.alpha = 0.7; //30% transparency
        }

        private _Out(event:createjs.MouseEvent):void{
            this.alpha = 1; //reset transparency
        }
    }
}