class Particles{
    constructor(x,y,r){
        var option = {
        restitution:0.4}
        this.r=r
        this.body=Bodies.circle(x,y,this.r,option)
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)




    }

    display(){
        var p = this.body.position
        var ang = this.body.angle
        push()
        translate(p.x,p.x)
        rotate(ang)
        ellipseMode(RADIUS)
        fill(this.color)
        ellipse(0,0,this.r,this.r)
        pop()

        
    }


}