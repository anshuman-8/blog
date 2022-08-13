
Recently I started exploring reinforcement learning. I am currently following the book, [Deep Reinforcement Learning in Action](https://www.manning.com/books/deep-reinforcement-learning-in-action). Now most courses, or books will use the [openAI Gym](https://gym.openai.com/). The issue you'll run into here would be how to render these gym environments while using Google Colab. In this blog post, I will discuss a few solutions that I came across using which you can easily render gym environments in remote servers and continue using Colab for your work.
<Space p={3}/>
## Method 1: Render the environment using matplotlib

This is the simplest method, using which we just draw, clear and re-draw images using [matplotlib](https://matplotlib.org/).

So how to do this? Let's take a step by step look at this method:
<Space  p={5}/>
**Step 1: Installing Xvfb**

Installing X11 system dependencies. [Xvfb](https://www.x.org/releases/X11R7.6/doc/man/man1/Xvfb.1.xhtml) is an X server that can run on machines with no display hardware and no physical input devices.

<Code language="bash" code={!apt-get install -y xvfb x11-utils}/> 


**Step 2: Installing additional python dependencies**

Next, we need to install a Python wrapper, `pyvirtualdisplay` which interacts with Xvfb virtual displays from within Python. Along with this, we need to install the python binding for openGL.

<Code language="bash" code={!pip install pyvirtualdisplay PyOpenGL PyOpenGL-accelerate}/>



**Step 3: Creating the virtual display**

Run the following command:


<Code language="bash" code={!echo $DISPLAY}/>

This will show you that currently there is no display.

In order to start the display, write and execute the following python code:



Now if you run `!echo $DISPLAY`, you'll notice it has been set to a value, meaning that there is now a virtual display up and running.

These steps will be common to all the methods we discuss below.

**Step 4: Rendering the gym environment**

In this method, we declare our environment as we usually do,


<Code language="python" code={env  = gym.make('CartPole-v0')}/>

We’ll start learning about Hooks by comparing this code to an equivalent class example.

# Equivalent Class Example

If you used classes in React before, this code should look familiar:


<Code language="javascript" code={}>
import React, { useState } from 'react';
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  return (
    &lt;div>
      &lt;p>You clicked {count} times</p>
      &lt;button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default Example;
</Code>


<Code language="python" code={}>
env  = gym.make('CartPole-v0')
</Code>





<Code language="python" code={}>

import matplotlib.pyplot as ply

img = plt.imshow(env.render('rgb_array'))

for _ in range(100):
currstate, _, done, info = env.step(action)

    display.clear_output(wait=True)
    img.set_data(env.render('rgb_array'))
    plt.axis('off')
    display.display(plt.gcf())

    if done:
        env.reset()

</Code>
<ImageHandler src="test-img.png" alt="testing image" h={3} w={4} />

<pre>
for _ in range(100):
currstate, _, done, info = env.step(action)

    display.clear_output(wait=True)
    img.set_data(env.render('rgb_array'))
    plt.axis('off')
    display.display(plt.gcf())

    if done:
        env.reset()
</pre>

<Note>
- ok this is noteds akjdbfknsd fh adkf as kjanskd kas d
- as dibsdn asd bdfkj dkjfbdnf jisbdfknbsdfn skd osdlm clad lamd jla dl cal dfjla smlf akjsb fknbasjf abfjla dljbanfd kjb fa jna knc kan sksj kansnaskdnak fkjandka sdowjdnqkw kjbswj
</Note>




