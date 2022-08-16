
<Space p={3}>

Hey there I have recently downloaded ubuntu Linux on my laptop and today and over here I am going to tell you the detailed steps to dual boot ubuntu with windows pc.
The requests are :
-   A pen drive 
-	Hard disk(optional)
-	A computer ( with enough storage space to run two operating system i.e. more than 100GB minimum)
    
<Space p={3}>

So, that’s it here, we are now good to go.

   1)	First step will be to back up all your important file on your external hard disk or on any cloud storage you use. This is just a safety measure, as we are dealing with installing an operating system, things might go wrong sometimes though chances are very low of happening. Afterall this step is optional and you can skip this step if are ready to take risk of losing files.
<Space p={2}>
   2)	So, from here go to any of your favorite browser(recommended to use Chrome) and type “download ubuntu desktop”(or [click here](https://ubuntu.com/download/desktop)) and click on Download! Make sure it is the LTS version. Usually these files are big (around 2-3GB) so may take some time.
<Space p={2}>

   3)	After the second step go to your browser search Balena Etcher(or [click here](https://www.balena.io/etcher/)) and click on the Download(do check for your system requirements, like windows-64bit).after downloading this you may continue to install it like any other application.
<Space p={2}>

   4)	From this step things may seem a bit confusing but do not worry they are easy. Now plugin your pen drive to the device. Make sure the pen drive is completely empty, and  format the pen drive’s file system to Fat32 filesystem(Default).
<Space p={2}>

   5)	We will now flash the pen drive , for this open Balena Etcher, where  you will see options to add file/image and another option of Target which will automatically connect to your pen drive. In the option for file/image select Ubuntu file which you have downloaded. Then click Flash(It may take some time).
<Space p={2}>

   6)	Now we have to allocate some space in the storage for Ubuntu. Search for ‘Create and format hard disk partitions’ on your windows search tab. It will open your Disk management window, over there in the mid bottom area you will see a small window as ‘C:’ which will have your disk space written, right click on that and click on Shrink Space. Here you will see an option ‘Enter the amount of space to shrink in MB’, enter the amount of space you want to allocate to run Ubuntu(Note: Give enough space so that both your OS need not struggle for space, more than 40GB will be enough). After giving the space click shrink.
<Space p={2}>

   7)	 Search for “Change advance startup options” on window search tab, there you will see an option for “Restart Now” under Advance Startup, go and select the Restart now option. Make sure your pen drive is connected to your device during this time. While rebooting you will see an option of your pen drives name, click on it and then select on Ubuntu.
<Space p={2}>

   8)	You are done , You can simply install ubuntu from here as per your requirements. 

<Space p={4}>

---

Problems that I faced after installation was , **the time shown in ubuntu and windows were different** .

Solution: This happens because Ubuntu keeps the hardware clock universal time(UTC), while windows keep the clock in local time, causing a conflict between the mentioned operating systems. The solution for this is either force Ubuntu to maintain the real-time clock in local time or force Windows to use UTC.
Run the following command to make ubuntu use local time- 

<Code language="bash" code={timedatectl set-local-rtc 1 --adjust-system-clock}/>

