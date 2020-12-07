var clicks = 0;

function onClick() {
  clicks += 1;
  var message = "";
  if(clicks==1)
    { message = "You pushed the button.";}
  else if(clicks==2)
  {message ="You pushed the button (again).";}
   else if(clicks==6)
  {message ="Stop pushing the button.";}
  else if(clicks==8)
    {message = "Seriously stop pushing. you've pressed it like" + clicks + " times.";}
      else if(clicks==10)
        {message = "Seriously stop pushing. you've pressed it like" + clicks + " times.";}
        else if(clicks==12)
          {message = "Stop it's now " + clicks + " times.";}
        else if(clicks==16)
          {message = "Im serious. STOP, it's" + clicks + " times.";}
        else if(clicks==20)
            {message = "I'm going to increase the amount of clicks you need to hear my dialogue if you continue.";}
        else if(clicks==25)
            {message = "I'm not joking.";}
        else if(clicks==30)
            {message = "Seriously, I'm not joking. ";}
            else if(clicks==60)
                {message = "really.";}
                else if(clicks==100)
                    {message = "Wow. ";}
                    else if(clicks==140)
                        {message = "Wow, I'm just impressed.";}
                        else if(clicks==190)
                            {message = "Seriously, you have some serious dedication. ";}
                            else if(clicks==220)
                                {message = "Or you are procrasinating";}
                                else if(clicks==290)
                                    {message = "wow you deserve this if you continue";}
                                    else if(clicks==360)
                                        {message = "heres a toast to you, you deserved it.";}
                                        else if(clicks==420)
                                          {message = "you've pressed the button " + clicks + " times." +"*WOOOOW*";}
                                          else if(clicks==580)
                                            {message = "Honestly, I'm impressed, you've hit the" + clicks + " milestone.";}
                                            else if(clicks==700)
                                              {message = "Now  you hit the" + clicks + " milestone.";}
                                              else if(clicks==1000)
                                                {message = "dude, you've hit the" + clicks + " milestone.";}
                                                else if(clicks==1400)
                                                  {message = "you know what. The next witty dialogue is in 10,000" + clicks;}
                                                  else if(clicks==1401)
                                                    {message = "Good luck. Winks*";}
                                                    else if(clicks==8000)
                                                      {message = "Omg";}
                                                      else if(clicks==10000)
                                                        {message = "why. Just why. You wasted so much time, what is wrong with you?!";}
                                                        else if(clicks==10010)
                                                          {message = "u know what. No more witty dialogues. If you continue clicking you would just see the default dialogue";}
                                                          else if(clicks>=1000000)
                                                            {message = "Why. please just go back :-: ";}
                                                            else
                                                              {message = "You pushed the button " + clicks + " times.";}
                                                               document.getElementById("message").innerHTML = message;
  };
