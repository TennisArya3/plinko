class Plinko{
    constructor(x,y){
        var option = {
        isStatic:true}
        this.r=10
        this.body=Bodies.circle(x,y,this.r,option)
        World.add(world,this.body)




    }

    display(){
        var p = this.body.position
        var ang = this.body.angle
        push()
        translate(p.x,p.x)
        rotate(ang)
        ellipseMode(RADIUS)
        fill("White")
        ellipse(0,0,this.r,this.r)
        pop()

        
    }


}