
window.onload=difficulty(1);
function difficulty(diff){
    document.querySelectorAll('.cell').forEach(input=>input.disabled=false)
    document.querySelectorAll('.cell').forEach(cell=>cell.classList.remove("correct"))
    document.querySelectorAll('.cell').forEach(cell=>cell.classList.remove("wrong"))

    var arr=[]
    if(diff==1){
        document.getElementById("easy").classList.add("btn-selected");
        
        document.getElementById("medium").classList.remove("btn-selected");
        
        document.getElementById("hard").classList.remove("btn-selected");
        
     arr=[
      0,0,6,1,0,0,0,0,0,
      3,0,0,0,0,0,0,0,5,
      1,0,9,0,4,2,0,8,0,
      0,0,8,0,0,0,1,3,2,
      0,0,3,6,0,0,0,9,8,
      2,9,0,3,0,0,7,6,0,
      0,6,0,4,0,0,0,7,1,
      8,1,0,2,6,0,3,0,9,
      4,0,7,9,0,0,2,5,6
    ]
}

else if(diff==2)
{
    document.getElementById("easy").classList.remove("btn-selected");
        
    document.getElementById("medium").classList.add("btn-selected");
    
    document.getElementById("hard").classList.remove("btn-selected");
    arr=[
       0,7,3,0,0,6,2,0,0,
       0,0,8,0,7,0,0,6,0,
       9,0,0,0,8,0,0,0,5,
       0,1,5,0,4,0,0,0,0,
       0,0,0,6,5,0,0,8,0,
       0,0,2,0,0,0,0,5,0,
       3,5,0,8,9,0,0,0,7,
       4,6,0,0,2,0,0,0,3,
       2,0,0,0,0,0,5,9,0

    ]
}
else if(diff==3)
{

    document.getElementById("easy").classList.remove("btn-selected");
        
    document.getElementById("medium").classList.remove("btn-selected");
    
    document.getElementById("hard").classList.add("btn-selected");
    arr=[
        0,0,0,0,5,0,0,0,4,
        0,7,0,0,0,6,0,0,0,
        0,1,0,0,0,0,3,0,0,
        0,0,8,4,1,0,0,6,0,
        0,0,9,4,1,0,0,6,0,
        0,0,1,0,2,8,0,7,0,
        0,0,0,0,7,0,1,0,5,
        0,2,0,8,0,1,0,0,0,
        0,0,0,0,4,9,0,2,0
    ]
}

for( let i=0;i<81;i++)
{
    var cell=document.getElementsByClassName("cell")[i];

    if(arr[i]=='0')
    cell.value=""
    else{
    cell.value=arr[i]
    cell.disabled=true;
    }
    


}
}




document.querySelectorAll('.cell').forEach(input=>input.onfocus=focuss)
document.querySelectorAll('.cell').forEach(input=>input.onblur=removeFocuss)
// document.querySelectorAll('.cell').forEach(input=>input.oninput=check)
 document.querySelectorAll('.cell').forEach(input=>input.onkeyup=check)
document.querySelectorAll('.cell').forEach(input=>input.onblur=uncheck)
// document.querySelectorAll('.cell').forEach(input=>input.onpropertychange=check)




// focus-removeFocus

function focuss(e){
var cell_id=e.target.id;

document.getElementById(`${cell_id}`).classList.add("selected");
var row=Math.floor(cell_id/9);
    var col=Math.floor(cell_id%9);
  
   
    
  var tmp=row*9
   

    for(var i=tmp;i<tmp+9;i=i+1){
    document.getElementById(`${i}`).classList.add("focus");
    // console.log(i+" i ");
    }

    for(var i=col;i<81;i=i+9){
    document.getElementById(`${i}`).classList.add("focus");
    }

    var bx_st=(Math.floor((row)/3)*3*9)+((Math.floor(col/3)*3)%9);
    // console.log(cell_id+" id ")
    // console.log(row+" row ")
    // console.log(col+" col ")
    // console.log(bx_st+" bx_st ")

    for(var i=bx_st;i<bx_st+3;i++)
    {
        var tmp1=i;
        document.getElementById(`${tmp1}`).classList.add("focus");
        tmp1=tmp1+9;
        document.getElementById(`${tmp1}`).classList.add("focus");
        tmp1=tmp1+9;
        document.getElementById(`${tmp1}`).classList.add("focus");
    }


}

function removeFocuss(e){
    var cell_id=e.target.id;
    document.getElementById(`${cell_id}`).classList.remove("selected");
var row=Math.floor(cell_id/9);
    var col=Math.floor(cell_id%9);
  
   
    
  var tmp=row*9
   

    for(var i=tmp;i<tmp+9;i=i+1){
    document.getElementById(`${i}`).classList.remove("focus");
    // console.log(i+" i ");
    }

    for(var i=col;i<81;i=i+9){
    document.getElementById(`${i}`).classList.remove("focus");
    }

    var bx_st=(Math.floor((row)/3)*3*9)+((Math.floor(col/3)*3)%9);
    // console.log(cell_id+" id ")
    // console.log(row+" row ")
    // console.log(col+" col ")
    // console.log(bx_st+" bx_st ")

    for(var i=bx_st;i<bx_st+3;i++)
    {
        var tmp1=i;
        document.getElementById(`${tmp1}`).classList.remove("focus");
        tmp1=tmp1+9;
        document.getElementById(`${tmp1}`).classList.remove("focus");
        tmp1=tmp1+9;
        document.getElementById(`${tmp1}`).classList.remove("focus");
    }

}


// focus-removeFocus



// check

function check(e){
    var cell_id=e.target.id;

   
    var val=document.getElementById(`${cell_id}`).value;
    var f=0;
    for(var i=0;i<81;i++)
    {
        if(i==cell_id)
        continue;
        
        if(val==document.getElementById(`${i}`).value&&val!="")
        {
            document.getElementById(`${i}`).classList.add("match");
            f=1;
        }
        else{
            document.getElementById(`${i}`).classList.remove("match");
            f=0;
        }

    }
    if(f==1)
    document.getElementById(`${cell_id}`).classList.add("match");


    var row=Math.floor(cell_id/9);
    var col=Math.floor(cell_id%9);

    var flag=[];
    for(var i=0;i<81;i++)
    flag.push(false);
  
   
    
  var tmp=row*9
   

    for(var i=tmp;i<tmp+9;i=i+1){

       
         
        if(i==cell_id)
        continue;
      
       
        if(document.getElementById(`${i}`).value==val&&val!=""){
           
        document.getElementById(`${i}`).classList.add("wrong");
        
        document.getElementById(`${cell_id}`).classList.add("wrong");
        flag[cell_id]=true;
       
        
      
        }
        else if(document.getElementById(`${i}`).value!=val)
        {
            document.getElementById(`${i}`).classList.remove("wrong");
        
            if(flag[cell_id]==false)
        document.getElementById(`${cell_id}`).classList.remove("wrong");
        
         }
       
    
    }
   
   
    for(var i=col;i<81;i=i+9){
        if(i==cell_id)
        continue;
       
       
        if(document.getElementById(`${i}`).value==val&&val!=""){
           
        document.getElementById(`${i}`).classList.add("wrong");
        
        document.getElementById(`${cell_id}`).classList.add("wrong");
        flag[cell_id]=true;
       
       
      
        }
        else if(document.getElementById(`${i}`).value!=val)
        {
            document.getElementById(`${i}`).classList.remove("wrong");
            if(flag[cell_id]==false)
        document.getElementById(`${cell_id}`).classList.remove("wrong");
        
         }

    }
    
   
    var bx_st=(Math.floor((row)/3)*3*9)+((Math.floor(col/3)*3)%9);
    

    for(var i=bx_st;i<bx_st+3;i++)
    {
        var tmp1=i;
        if(tmp1==cell_id)
        continue;

       
        
       
        if(document.getElementById(`${tmp1}`).value==val&&val!=""){
           
        document.getElementById(`${tmp1}`).classList.add("wrong");
        
        document.getElementById(`${cell_id}`).classList.add("wrong");
        flag[cell_id]=true;
       
        
      
        }
        else if(document.getElementById(`${tmp1}`).value!=val)
        {
            document.getElementById(`${tmp1}`).classList.remove("wrong");
            if(flag[cell_id]==false)
        document.getElementById(`${cell_id}`).classList.remove("wrong");
        
         }

       
        tmp1=tmp1+9;
        if(document.getElementById(`${tmp1}`).value==val&&val!=""){
           
            document.getElementById(`${tmp1}`).classList.add("wrong");
            
            document.getElementById(`${cell_id}`).classList.add("wrong");
            flag[cell_id]=true;
    
          
            }
            else if(document.getElementById(`${tmp1}`).value!=val)
            {
                document.getElementById(`${tmp1}`).classList.remove("wrong");
                if(flag[cell_id]==false)
            document.getElementById(`${cell_id}`).classList.remove("wrong");
            
             }
        tmp1=tmp1+9;
        if(document.getElementById(`${tmp1}`).value==val&&val!=""){
           
            document.getElementById(`${tmp1}`).classList.add("wrong");
            
            document.getElementById(`${cell_id}`).classList.add("wrong");
           flag[cell_id]=true;
           
          
            }
            else if(document.getElementById(`${tmp1}`).value!=val)
            {
                document.getElementById(`${tmp1}`).classList.remove("wrong");
                if(flag[cell_id]==false)
            
            document.getElementById(`${cell_id}`).classList.remove("wrong");
            
             }
    }

}

function uncheck(){
   for(var i=0;i<81;i++)
   {
       document.getElementById(`${i}`).classList.remove("wrong");
       document.getElementById(`${i}`).classList.remove("selected");
       document.getElementById(`${i}`).classList.remove("focus");
       document.getElementById(`${i}`).classList.remove("match");


   }
}

function validate(){
    for(var i=0;i<81;i++)
    document.getElementById(`${i}`).classList.add("correct");

    
    for(var i=0;i<81;i++)
    {
        var cell_id=i;
        var you_win=validate2(cell_id);
        if(document.getElementById(`${i}`).value=="")
        document.getElementById(`${i}`).classList.add("wrong");
    }


    for(var i=0;i<81;i++)
    {
        document.getElementById(`${i}`).classList.remove("wrong");
        document.getElementById(`${i}`).classList.remove("selected");
        document.getElementById(`${i}`).classList.remove("focus");
        document.getElementById(`${i}`).classList.remove("match");
 
 
    }

    if(you_win==1)
    alert("You Win");
    else
    alert("You lose");



}

function validate2(cell_id){

    var you_win=1;
    var val=document.getElementById(`${cell_id}`).value;


    var row=Math.floor(cell_id/9);
    var col=Math.floor(cell_id%9);

    document.querySelectorAll('.cell').forEach(input=>input.disabled=true)
  
   
    
  var tmp=row*9
   

    for(var i=tmp;i<tmp+9;i=i+1){

       
         
        if(i==cell_id)
        continue;
      
       
        if(document.getElementById(`${i}`).value==val){
           
        document.getElementById(`${i}`).classList.add("wrong");
        
        document.getElementById(`${cell_id}`).classList.add("wrong");

        
        you_win=0;
        
       
        
      
        }
        else if(val=="")
        {
            document.getElementById(`${cell_id}`).classList.add("wrong");
            you_win=0;
        }
        
       
    
    }
   
   
    for(var i=col;i<81;i=i+9){
        if(i==cell_id)
        continue;
       
       
        if(document.getElementById(`${i}`).value==val){
           
        document.getElementById(`${i}`).classList.add("wrong");
        
        document.getElementById(`${cell_id}`).classList.add("wrong");
        you_win=0;
       
       
    
      
        }
        else if(val=="")
        {
            document.getElementById(`${cell_id}`).classList.add("wrong");
            you_win=0;
        }
        

    }
    
   
    var bx_st=(Math.floor((row)/3)*3*9)+((Math.floor(col/3)*3)%9);
    

    for(var i=bx_st;i<bx_st+3;i++)
    {
        if(i==cell_id)
        continue;
       
        var tmp1=i;
        if(tmp1==cell_id)
        continue;

       
        
       
        if(document.getElementById(`${tmp1}`).value==val){
           
        document.getElementById(`${tmp1}`).classList.add("wrong");
        
        document.getElementById(`${cell_id}`).classList.add("wrong");
        you_win=0;
       
        
      
        }
        else if(val=="")
        {
            document.getElementById(`${cell_id}`).classList.add("wrong");
            you_win=0;
        }
       

       
        tmp1=tmp1+9;
        if(document.getElementById(`${tmp1}`).value==val){
           
            document.getElementById(`${tmp1}`).classList.add("wrong");
            
            document.getElementById(`${cell_id}`).classList.add("wrong");
            you_win=0;
    
          
            }
            else if(val=="")
            {
                document.getElementById(`${cell_id}`).classList.add("wrong");
                you_win=0;
            }
           
        tmp1=tmp1+9;
        if(document.getElementById(`${tmp1}`).value==val){
           
            document.getElementById(`${tmp1}`).classList.add("wrong");
            
            document.getElementById(`${cell_id}`).classList.add("wrong");
            you_win=0;
           
          
            }
            else if(val=="")
            {
                document.getElementById(`${cell_id}`).classList.add("wrong");
                you_win=0;
            }

        
            
    }

 return you_win;
   
    
    
}