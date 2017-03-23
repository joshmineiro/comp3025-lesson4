module objects {
    export class Label extends createjs.Text
    {
        //CONSTRUCTOR ++++++++++++++++++++++++++++++
        constructor(public LabelString:string, public fontFamily:string,
                    public fontColour:string, public centred:boolean,
                    x:number, y: number){
            super(LabelString, fontFamily, fontColour);
            this.Start();
            this.x = x;
            this.y = y;

        }

        //public methods ++++++++++++++++++++++++++++
        public Start():void{
            if(this.centred){
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
            }
        }
    }
}