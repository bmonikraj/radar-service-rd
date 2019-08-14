# SharkRadar
**Sharkradar** is a lightweight, yet flexible **service registry and discovery** tool, compatible with any microservice *(independent of tech stack)*, as long as your microservice supports **HTTP** for communication (generally, it surely would, unless you have some custom protocol for communication. In that case, *Congratulations* !)

## Architecture
The architecture of sharkradar is pretty straight forward, keeping in mind:

 - Usability
 - Compatibility
 - Lightweight
 - Low storage footprint
 - Low computational footprint

![Architecture](https://raw.githubusercontent.com/bmonikraj/sharkradar/master/architectural%20diagram.png)

**The fundamental principle behind the architecture is a "publish/ask" mechanism** 

> **Service R(registry)** => "You *(microservices/applications/consumers)* give me your fitness report. If I receive, I will give you work to do based on your ability, I am not gonna ask you for it :no_mouth:. And if I don't receive it within time, you will not be considered for work until next report"

> **Service D(discovery)** => "You want to know which of person can do the job in best way and how to reach him, ask me! I will tell you best person's address, ONLY :neutral_face:. I am not gonna take you there"

**Service Registration**
 - Client (Microservice - who wants to be discoverable through shark radar)
 - Client sends a health report with `params` to shark radar at some decided `frequency` in every last report sent. 
 - If sharkradar doesn't receive the health report, after the threshold time provided by client in previous report, the client is removed from the list of registered services *(hence won't be considered for discovery)*
 - Auto-deregistration happens, if health report is not sent.
 - No separate API / endpoint for registration. First health report will be considered as regitration.

**Service Discovery**

 - Any client (with any tech stack) which understands and able to communicate to HTTP, can ask for a service location (*IP address* and *Port*) 
 - The address given is for the best (selected by a weight based priority algorithm) client with the asked `service name`
