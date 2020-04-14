# Credit Card Roulette

This application is kind of based on an inside joke with some friends. You are able to enter a check total, enter however many players and then hit a button to find out who pays the bill for your table!

## Things Learned

#### React Native
I have dabbled with React Native before through some courses on Udemy but I've never really taken the time to build my own project in React Native. I learned a lot about some very interesting idiosyncracies of the framework and definitely discovered a lot of pain points. Testing in particular was difficult and it seems that unless you use the exact right version of each package, unit tests will fail due to a package not being the correct version. Specifically, I ran into unresolved issues with Vector Icons that I still haven't found a resolution for this issue.

#### Context API with React Hooks
This was my first time utilizing the Context API and I chose to use a similar architecture to a typical React/Redux project. I was really surprised how easy it was to interact with my global state. Obviously, if I had a bigger application, I would've had different providers but having a single provider for the whole project was fine. 