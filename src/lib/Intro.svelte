<script>
// @ts-nocheck

    /**
     * @type {{ any; }}
     */
     export let introData;

    console.log(introData)
</script>

<div class="top-liner">
    <div class="left-line"></div>
    <div class="subtitle">SPECIAL EDITION</div>
    <div class="right-line"></div>
</div>
<h1>{introData.titel}</h1>
<div class="container">
    <div class="container-image">
        <img src={introData.imageUrl} class="image" alt=""/>
    </div>
</div>
<h2 class="ido">THUY-DUC & MORITZ SAID "I DO"</h2>

<div class="box">
  <div class="border-bottom text-box bold">We've eloped</div>
  <div class="text-box">
    <div class="greeting">Dear Family and Friends,</div>
    <div>
      We're thrilled to share the joyous news that Thuy-Duc and Moritz have eloped! In an intimate celebration of our relationship, we embarked on a unique journey, breaking away from tradition.
    
      From studying together to graduating and working side by side multiple times, we've crafted our own story.  In the meantime, we've formed our own family with the two coolest kids. Growing up together has bonded us more than any vow ever could.
      At first, we hadn't considered getting married. However, during the challenges of the pandemic, we decided to tie the knot.
      
      While we missed having all of you physically present, your love and support mean the world to us.
      
      We are looking forward to gathering with all of you to share stories, laughter, and the joy of our union.
      Thank you for being a part of our lives.
    </div>
    <div class="greeting">With love</div>
  </div>
</div>

  <style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100;300;500&display=swap');


    h1 {
        text-align: center;
        font-family: 'Playfair Display', serif;
        font-size: 5.5rem;
        font-weight: 100;
        letter-spacing: 20px;
    }

    .ido {
        font-family: 'Playfair Display', serif;
        letter-spacing: 0.1cap;
        text-align: center;
        margin: 45px 0px;
    }

    .top-liner {
        display: flex;
        align-items: center;
        flex-direction: row;
        
        .left-line, .right-line {
        
            height: 0px;
            flex-grow: 2;
            border-top: 3px solid black;
        }

        .subtitle {
            font-family: 'Barlow', sans-serif;
            letter-spacing: 1cap;
            margin: 15px 45px;
        }
    }
    .container-image {
      position: relative;
      padding: 15px;
      border: 2px solid black;
      max-width: 1250px;
    }

    .container {
        display: flex;
        justify-content: center;
    }

    .the-days {
        position: relative;
    }
  
    .image {
        width: 100%;
        height: auto;

      object-fit: cover; /* Ensure the image covers the container */
    }
  
    .text {
      font-family: 'Playfair Display', serif;
      position: absolute;
      top: 15%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      font-size: 7em;
      font-weight: 100;
    }
    .box{
      border: 2px solid black; 
    }
    .border-bottom
    {
      border-bottom: 2px solid black;
    }
    .text-box{
      font-family: 'Barlow', sans-serif;
      font-weight: 300;
      text-align: justify;
      line-height: 1.3;
      letter-spacing: 0.1rem;
      padding: 30px;
    }
    .bold{
      font-weight: 500;
    }
    .greeting{
      margin: 5px 0px;
    }
  </style>
  
