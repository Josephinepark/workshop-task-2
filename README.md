##### workshop-task-2

# Workshop 2 : Coding Environments & Sharing Work

[Website Link] https://josephinepark.github.io/workshop-task-2/

- By using setTimeout, this sketch is programmed to start after 3 seconds, generating hearts randomly over time.

## Task 
[] Try using IDE running locally on your own computer (VSCodium or VSCode)<br>
[] use setTimeout and setInterval functions<br>
[] Experiment with at least one new item from the https://p5js.org/reference/<br>
[] Create a Github loging, include a README file in each repository with a link to the webpage, post a link to your Github account on Canvas<br>

## Notes from the workshop video
IDE 
- visual studio code (run by Microsoft)
- VSCodium
  
#### VSCodium

- live preview / p5.js & vscode extensions / live server
  
- ctrl + shift + P (search bar) -> create p5.js project -> open the file -> able to see everything from p5.js
  
- Go Live (button on the right down side) -> will open up a new window and show the executed one
  
- file -> open folder
<br>
setTimeout (name of the function, time) /1000=1sec 
mousePressed() /able to make to by controlled with the mouse
<br>
setInterval
clearInterval
<br>
Git / GitHub - working on same project (collaboration in creative computing project)

## Progress (Experimentation and problem solving)

After watching the workshop video, I observed that squares were being generated over time. Seeing this result, I wanted to try replacing the squares with hearts. Therefore, I decided to use setTimeout and setInterval with heart shapes in this workshop.
<br>
<br>
I found the codes for creating hearts in p5.js documentation. After modifying the code, I observed how multiple hearts could change and evolve over time. By adjusting their size, color, and position, I experimented with various visual effects and learned how to create different heart representations.
<Br>
<Br>
<img width="928" alt="image" src="https://github.com/user-attachments/assets/1eadd60a-07f2-469b-b5d4-4771364fe01a" />
<Br>
<Br>
Through various experiments, I was able to explore changes in heart sizes, gradient effects, and how to emphasize certain areas with stronger lighting. By dynamically adjusting the heart sizes, I experimented with effects where they gradually grew or shrank on the screen, enhancing visual diversity by applying different colour transitions.
<Br>
<br>
<img width="856" alt="image" src="https://github.com/user-attachments/assets/0519c896-1b2f-4e69-8217-07f006740028" />
<Br>
<br>
<img width="855" alt="image" src="https://github.com/user-attachments/assets/5e03f5a8-6741-4129-9cd2-debb1e8f988a" />
<Br>
<Br>
In particular, while applying gradients, I adjusted colour combinations and transparency to create smooth transition effects. Additionally, I explored ways to add highlights to specific areas, emphasizing a more three-dimensional look. 
<Br>
<Br>
<img width="389" alt="image" src="https://github.com/user-attachments/assets/830b02d4-2901-46bd-b183-2b11c970b5b0" />
<Br>
<Br>
After numerous trials, I was able to adjust the (400, 400) canvas size to contain only a single large heart. Through multiple experiments, I refined the design by removing unnecessary elements and achieving a clean composition with a single focal heart.
After this achievement, I returned to my original sketch and continued working on it. I made further adjustments to the heart’s size and position, experimenting with colour and effects to create a more polished visual outcome.
<Br>
<Br>
<img width="915" alt="image" src="https://github.com/user-attachments/assets/5f9cbeab-c36d-447e-9398-1825c420efea" />
<Br>
<Br>
After completing the heart design I envisioned, I gradually implemented my intended functionality using setTimeout() and setInterval(). These functions allowed me to control the timing of heart appearances, ensuring that new hearts would emerge sequentially after the previous ones. This helped create a progressive animation effect.

In addition, I used the push() function to add new hearts to an array, which helped me gain a deeper understanding of how push() works. By adding heart data to an array and dynamically rendering them on the canvas, I learned the importance and functionality of arrays in managing visual elements.
<Br>
<Br>
<img width="582" alt="image" src="https://github.com/user-attachments/assets/578014fb-a028-4661-a8da-01ef1b5ac038" />
<Br>
<Br>


## codes

<img width="437" alt="image" src="https://github.com/user-attachments/assets/dc8abe9f-244f-4e64-8166-fddd3309c993" />
<Br>
<Br>
<img width="266" alt="image" src="https://github.com/user-attachments/assets/c998646c-2267-4b4e-abf6-650dcc3c10f4" />
<Br>
<Br>
<img width="204" alt="image" src="https://github.com/user-attachments/assets/aaebf488-5d13-47a8-9bf3-b9f66339dfaf" />
<Br>
<Br>
<img width="82" alt="image" src="https://github.com/user-attachments/assets/2f104ca7-9490-4d89-96ae-fb56dedc95ce" />




## Furture Developement

Through this workshop, I learned how the setTimeout() and setInterval() functions work. I discovered that in the code, 1 second is represented as 1000, which allowed me to control the execution timing of my code more precisely. I also learned about the push() function, which is used to add elements to an array dynamically. While exploring the documentation for push(), I also came across the pop() function.

If I further develop this workshop, I would like to incorporate not only hearts but also various other shapes appearing randomly. For example, circles, triangles, and squares could appear in random sizes and colours on the canvas, creating a more dynamic and visually engaging effect.
Additionally, I want to move away from a plain, solid background and experiment with more vibrant and colourful designs. To achieve this, I plan to explore using the random() function to change background colours gradually, apply gradient effects, or incorporate image textures for a richer visual experience.
Through these experiments, I would like to add interactive elements where users can trigger changes by clicking on the shapes.

## Reference / other sources that helped me
<br>
https://editor.p5js.org/Mithru/sketches/Hk1N1mMQg<br>
- how to create hearts
<Br>
<Br>
https://www.daleseo.com/js-timer/
- understanding setTimeout() & setInterval functions
<br>
<br>
https://www.youtube.com/watch?v=CqDqHiamRHA
- setInterval tutorial
<br>
<Br>
https://www.youtube.com/watch?v=nGfTjA8qNDA
- setTimeout tutorial
<Br>
<Br>
https://p5js.org/reference/p5/push/
- how to work with push().
