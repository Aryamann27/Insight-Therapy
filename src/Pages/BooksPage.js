import React from "react";
import {default as book1} from '../images/Books/book1.jpg';
export default function Books(){
    return(
        <>
        <h1 style={{textAlign:"center", fontWeight:"bold", marginTop:"2rem"}}>EMPOWERING YOUR MIND, ONE PAGE AT A TIME</h1>

        <h2 style={{marginLeft:"2rem", marginTop:"4rem"}}>The 12 best mental health books picked by us:</h2>
        
        <h3 style={{marginTop:"2rem", marginLeft:"2rem"}}>1. The Body Keeps the Score</h3>
        <div style={{marginLeft:"2rem", marginTop:"1rem", display:"flex"}}>
            <img src={book1} style={{width:"150px", height:"225px", marginRight:"2rem"}} />
            <div style={{paddingRight:"45rem"}}>
            <p><b>Who it’s best for :</b> those who want to work through and understand traumatic experiences.</p>
            <p><b>Key message : </b> For many people, trauma is part of life, and understanding the science behind how it impacts the body can be a great tool in recovery.</p>         
            <p>Trauma comes in all forms, from near-death experiences to unexpected loss. Dr. Bessel van der Kolk uses recent scientific discoveries to reveal how trauma doesn’t just impact the mind, but also the body.
            </p>
            <p style={{marginTop:"2rem"}}>
            According to van der Kolk, trauma can compromise the sufferers’ capacities for pleasure, engagement, self-control, and trust. In his #1 New York Times bestselling book, “The Body Keeps the Score,” he explores treatment methods that help activate the brain’s natural neuroplasticity in trauma patients.</p>
            </div>
        </div>
        </>
    );
}