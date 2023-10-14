const summaryBox = document.createElement('div');
summaryBox.className = "youtube_summary_container youtube_theme_dark";
summaryBox.innerHTML =
    `<div id="youtube_summary_header" class="youtube_summary_header">
        <a target="_blank" style="width: 24px;height: 24px;">
            <img style="width:24px;height:24px;" src="${chrome.runtime.getURL('images/v-48.png')}">
        </a>
        <p class="youtube_summary_header_text">Transcript & Summary</p>
        <div class="youtube_summary_header_actions">
            <div id="youtube_summary_header_summary" class="youtube_summary_header_action_btn youtube-summary-hover-el youtube_summary_icon icon_summary_hover_dark" data-hover-label="View AI Summary (Open New Tab)">
        <svg style="filter: brightness(0.8);" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.4316 10.1814C20.7051 9.33773 20.7519 8.43698 20.5673 7.56952C20.3828 6.70206 19.9732 5.89841 19.3799 5.23923C18.7866 4.58005 18.0303 4.08853 17.187 3.81399C16.3437 3.53945 15.443 3.49156 14.5753 3.67512C13.9828 3.01454 13.2267 2.52175 12.3831 2.24638C11.5396 1.97101 10.6383 1.92278 9.7702 2.10655C8.90206 2.29031 8.09768 2.69959 7.43805 3.29315C6.77842 3.88672 6.28684 4.64361 6.01282 5.48762C5.14377 5.66999 4.33818 6.07829 3.67728 6.67133C3.01638 7.26438 2.52354 8.0212 2.24845 8.86549C1.97336 9.70978 1.92575 10.6117 2.11042 11.4802C2.2951 12.3488 2.70552 13.1533 3.30032 13.8126C3.07846 14.4869 3.00273 15.2008 3.07816 15.9066C3.1536 16.6125 3.37847 17.2942 3.73782 17.9064C4.27089 18.8322 5.08384 19.5651 6.05977 19.9997C7.03569 20.4343 8.12431 20.5483 9.16907 20.3251C9.6399 20.8539 10.2177 21.2767 10.8641 21.5654C11.5106 21.8542 12.211 22.0023 12.9191 22.0001C13.989 22.0001 15.0314 21.6606 15.8962 21.0305C16.7609 20.4005 17.4036 19.5123 17.7316 18.4939C18.4262 18.351 19.0824 18.062 19.6567 17.646C20.2311 17.2301 20.7104 16.6967 21.0628 16.0814C21.5927 15.1569 21.817 14.0886 21.7037 13.029C21.5903 11.9695 21.1451 10.9728 20.4316 10.1814V10.1814ZM12.9316 20.6939C12.0546 20.6938 11.2054 20.3864 10.5316 19.8251L10.6503 19.7564L14.6316 17.4564C14.7342 17.4018 14.8196 17.3196 14.8781 17.2191C14.9366 17.1187 14.966 17.0038 14.9628 16.8876V11.2626L16.6441 12.2376C16.6529 12.2412 16.6605 12.2472 16.6661 12.2549C16.6716 12.2627 16.6748 12.2719 16.6753 12.2814V16.9314C16.677 17.4259 16.5808 17.9159 16.3923 18.3732C16.2038 18.8304 15.9267 19.2458 15.577 19.5955C15.2273 19.9452 14.8118 20.2223 14.3546 20.4108C13.8974 20.5993 13.4074 20.6955 12.9128 20.6939H12.9316ZM4.86282 17.2564C4.4287 16.5 4.27178 15.6159 4.41907 14.7564L4.53782 14.8251L8.51907 17.1251C8.61408 17.18 8.72186 17.2089 8.83157 17.2089C8.94128 17.2089 9.04905 17.18 9.14407 17.1251L14.0128 14.3189V16.2501C14.0167 16.2579 14.0187 16.2664 14.0187 16.2751C14.0187 16.2838 14.0167 16.2923 14.0128 16.3001L9.98782 18.6251C9.56146 18.8719 9.09067 19.0322 8.60233 19.097C8.11399 19.1617 7.61767 19.1297 7.14174 19.0025C6.66581 18.8754 6.21958 18.6558 5.82855 18.3562C5.43753 18.0566 5.10937 17.6828 4.86282 17.2564V17.2564ZM3.81282 8.58137C4.25703 7.81796 4.95645 7.23585 5.78782 6.93762V11.6689C5.78462 11.7828 5.81263 11.8954 5.86881 11.9945C5.92499 12.0937 6.0072 12.1756 6.10657 12.2314L10.9503 15.0251L9.26907 16.0001C9.25083 16.0063 9.23106 16.0063 9.21282 16.0001L5.18782 13.6751C4.32883 13.1783 3.70178 12.3612 3.44406 11.4029C3.18633 10.4447 3.31893 9.42331 3.81282 8.56262V8.58137ZM17.6441 11.7939L12.7816 8.96887L14.4628 8.00012C14.4711 7.99448 14.4809 7.99146 14.4909 7.99146C14.501 7.99146 14.5108 7.99448 14.5191 8.00012L18.5441 10.3251C19.1587 10.6811 19.6596 11.2043 19.9885 11.8339C20.3174 12.4635 20.4607 13.1735 20.4018 13.8813C20.3428 14.5892 20.0841 15.2657 19.6556 15.8322C19.2272 16.3988 18.6466 16.8319 17.9816 17.0814V12.3501C17.9779 12.2362 17.9449 12.1252 17.8858 12.0277C17.8267 11.9303 17.7434 11.8497 17.6441 11.7939V11.7939ZM19.3191 9.29387L19.2003 9.21887L15.2253 6.90637C15.1267 6.84553 15.0131 6.81331 14.8972 6.81331C14.7813 6.81331 14.6677 6.84553 14.5691 6.90637L9.70657 9.71262V7.75012C9.70163 7.74157 9.69903 7.73187 9.69903 7.72199C9.69903 7.71212 9.70163 7.70242 9.70657 7.69387L13.7378 5.37512C14.3547 5.01964 15.0599 4.8471 15.7712 4.87766C16.4825 4.90822 17.1704 5.14063 17.7545 5.54771C18.3385 5.95479 18.7947 6.51972 19.0695 7.17646C19.3444 7.83321 19.4266 8.55462 19.3066 9.25637L19.3191 9.29387ZM8.78782 12.7189L7.10032 11.7501C7.08443 11.7376 7.07339 11.7199 7.06907 11.7001V7.06262C7.0691 6.34996 7.2722 5.65206 7.65458 5.05068C8.03697 4.44929 8.5828 3.96931 9.22815 3.66697C9.87349 3.36463 10.5916 3.25244 11.2984 3.34354C12.0053 3.43464 12.6715 3.72527 13.2191 4.18137L13.1128 4.25012L9.11907 6.55012C9.01641 6.60472 8.93103 6.68688 8.87251 6.78736C8.81399 6.88783 8.78466 7.00264 8.78782 7.11887V12.7189ZM9.70032 10.7501L11.8628 9.50012L14.0316 10.7501V13.2501L11.8628 14.5001L9.69407 13.2501L9.70032 10.7501Z" fill="#828282"></path>
        </svg>
    </div>

    <div id="youtube_summary_header_track" class="youtube_summary_header_action_btn youtube-summary-hover-el icon_hover_dark" data-hover-label="Jump to Current Time">
        <svg style="filter: brightness(0.9);" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="6.25" stroke="#828282" stroke-width="1.5"></circle>
            <rect x="3.19995" y="11.3999" width="5" height="1.2" rx="0.6" fill="#828282"></rect>
            <rect x="15.7" y="11.3999" width="5" height="1.2" rx="0.6" fill="#828282"></rect>
            <rect x="11.3999" y="8" width="5" height="1.2" rx="0.6" transform="rotate(-90 11.3999 8)" fill="#828282"></rect>
            <rect x="11.3999" y="21" width="5" height="1.2" rx="0.6" transform="rotate(-90 11.3999 21)" fill="#828282"></rect>
        </svg>
    </div>
    <div id="youtube_summary_header_copy" class="youtube_summary_header_action_btn youtube-summary-hover-el icon_hover_dark" data-hover-label="Copy Transcript
    (Plain Text)">
        <svg style="filter: brightness(0.95);" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 6.6V5C7 4.44772 7.44772 4 8 4H18C18.5523 4 19 4.44772 19 5V16C19 16.5523 18.5523 17 18 17H16.2308" stroke="#828282" stroke-width="1.5"></path>
            <rect x="4.75" y="6.75" width="11.5" height="13.5" rx="1.25" stroke="#828282" stroke-width="1.5"></rect>
        </svg>
    </div>
    <div id="youtube_summary_header_setting" style="opacity: .5;text-align:center;" class="youtube_summary_header_action_btn icon_hover_dark">
        <svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-gear" viewBox="0 0 16 16" width="18" height="18" fill="#000" style="display: inline-block; user-select: none; vertical-align: text-bottom; margin-top: 3px;overflow: visible;"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg>
    </div>
    <div style="filter: brightness(0.9);" id="youtube_summary_header_toggle" class="youtube_summary_header_action_btn icon_hover_dark">
        <svg width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.2447 9.9588C16.5376 9.6659 16.5376 9.19103 16.2447 8.89814C15.9518 8.60524 15.4769 8.60524 15.184 8.89814L16.2447 9.9588ZM6.81611 8.89814C6.52322 8.60524 6.04835 8.60524 5.75545 8.89814C5.46256 9.19103 5.46256 9.6659 5.75545 9.9588L6.81611 8.89814ZM11.7425 14.461L16.2447 9.9588L15.184 8.89814L10.6819 13.4003L11.7425 14.461ZM11.3183 13.4003L6.81611 8.89814L5.75545 9.9588L10.2576 14.461L11.3183 13.4003ZM10.6819 13.4003C10.8576 13.2246 11.1425 13.2246 11.3183 13.4003L10.2576 14.461C10.6677 14.871 11.3325 14.871 11.7425 14.461L10.6819 13.4003Z" fill="#8B8B8B"></path>
        </svg>
    </div>
    </div>
    </div>
    <div id="youtube_summary_body" class="youtube_summary_body youtube_summary_body_dark youtube_summary_body_show" style="max-height: 547px;">
        <div id="youtube_summary_lang_select" class="youtube_summary_lang_select">
            <button class="youtube_summary_lang btn_dark youtube_summary_lange_selected" data-yt-transcript-lang="English (auto-generated)">English (auto-generated)</button><button class="youtube-summary-gpt-btn">Summary</button>
        </div>
        <div id="youtube_summary_text" class="youtube_summary_text"><div class="youtube_summary_transcript_text_segment">
            <div><a class="youtube_summary_transcript_text_timestamp" style="padding-top: 16px !important;" href="/watch?v=undefined&amp;t=0s" target="_blank" data-timestamp-href="/watch?v=undefined&amp;t=0s" data-start-time="0">00:00</a></div>
            <div class="youtube_summary_transcript_text" data-start-time="0">so in this video we're gonna try and learn as much Python as we can in five minutes so let's get started so the comment in Python we use the hash tag and then whatever we want to say we can use multi-line comments with three double quotes we can put in our comments here and then end it with three double quotes of course we can do addition we can do subtraction multiplication division we can also store data in our program using variables so to create a variable we give it a name we set it equal to a value in this case a string</div>
        </div><div class="youtube_summary_transcript_text_segment">
            <div><a class="youtube_summary_transcript_text_timestamp" style="padding-top: 16px !important;" href="/watch?v=undefined&amp;t=29s" target="_blank" data-timestamp-href="/watch?v=undefined&amp;t=29s" data-start-time="29">00:29</a></div>
            <div class="youtube_summary_transcript_text" data-start-time="29">called hello world strings in Python use either double quotes or single quotes the choice is yours and there is our variable we can also store multiple strings in a variable if we want using something called a list so we could create a variable called B and say I want to store two strings this time I throw the word hello world and the word Francis hit enter and we store that in a list using two square brackets to share that we want to use a list and we tell it all the items we want to store separated by a comma</div>
        </div><div class="youtube_summary_transcript_text_segment">
            <div><a class="youtube_summary_transcript_text_timestamp" style="padding-top: 16px !important;" href="/watch?v=undefined&amp;t=55s" target="_blank" data-timestamp-href="/watch?v=undefined&amp;t=55s" data-start-time="55">00:55</a></div>
            <div class="youtube_summary_transcript_text" data-start-time="55">together item out of a list we need to know its position in the list so this is position zero and this is position 1 so if I said be square brackets 1 I'll print out the item in the last episode 1 we can also add lists together so I could say B plus a new list 1 2 3 4 5 hit enter and now we have a new list with two strings and five numbers in it that's another great thing about Python lists they automatically resize and they can store any data type you want or multiple data types next we're going to</div>
        </div><div class="youtube_summary_transcript_text_segment">
            <div><a class="youtube_summary_transcript_text_timestamp" style="padding-top: 16px !important;" href="/watch?v=undefined&amp;t=84s" target="_blank" data-timestamp-href="/watch?v=undefined&amp;t=84s" data-start-time="84">01:24</a></div>
            <div class="youtube_summary_transcript_text" data-start-time="84">learn about dictionaries so dictionaries are just like lists except to access data in a dictionary instead of using its position in the list we need to use its name so every item in a dictionary has a name what you call a key so I create a variable called C and we use two curly brackets to say we want to create a dictionary and its name is gonna be fav color and it's going to give us back the string hello world so we hit enter and now if I says say use these square brackets again and i put in the word fifth color we get the</div>
        </div><div class="youtube_summary_transcript_text_segment">
            <div><a class="youtube_summary_transcript_text_timestamp" style="padding-top: 16px !important;" href="/watch?v=undefined&amp;t=111s" target="_blank" data-timestamp-href="/watch?v=undefined&amp;t=111s" data-start-time="111">01:51</a></div>
            <div class="youtube_summary_transcript_text" data-start-time="111">word hello world printed back that would be called an associative array in other languages like PHP for example finally we have sets so a set is just like a list except it doesn't have order and it doesn't have repetition so to create a set in Python we create a variable we use two curly brackets again but we don't use the colon when we're creating a set we just give it a list of values and I'm gonna repeat some like this see if and now we want to see our set you can see there are no repeated values</div>
        </div><div class="youtube_summary_transcript_text_segment">
            <div><a class="youtube_summary_transcript_text_timestamp" style="padding-top: 16px !important;" href="/watch?v=undefined&amp;t=137s" target="_blank" data-timestamp-href="/watch?v=undefined&amp;t=137s" data-start-time="137">02:17</a></div>
            <div class="youtube_summary_transcript_text" data-start-time="137">everything I repeated just was ignored when we created the set we could also add logic to a Python program so if we want a certain action to only happen in certain circumstances we would say if say one equals one then we will print out the word of course and we run that you can see it prints it out if I said one equals two obviously not because that isn't true and you could see that code never got run so python has equals operators it also has not equals it has greater than less than greater than equal to less than equal to all of the</div>
        </div><div class="youtube_summary_transcript_text_segment">
            <div><a class="youtube_summary_transcript_text_timestamp" style="padding-top: 16px !important;" href="/watch?v=undefined&amp;t=167s" target="_blank" data-timestamp-href="/watch?v=undefined&amp;t=167s" data-start-time="167">02:47</a></div>
            <div class="youtube_summary_transcript_text" data-start-time="167">operators you would expect Python also has boolean data types so if we say the word true or the word false with a capital letter and we can also use boolean operators so I could say true or false and that will give us true I could say true and false and that will give us false Python also has loops it has wire loops and for loops so we have a list here called B and we can loop over every item in the list using a for loop so if I say F for item in B because that's the name of our list and we're going to</div>
        </div><div class="youtube_summary_transcript_text_segment">
            <div><a class="youtube_summary_transcript_text_timestamp" style="padding-top: 16px !important;" href="/watch?v=undefined&amp;t=194s" target="_blank" data-timestamp-href="/watch?v=undefined&amp;t=194s" data-start-time="194">03:14</a></div>
            <div class="youtube_summary_transcript_text" data-start-time="194">refer to every item as item that's what this variable does so if I wanted to print every item in the list I would say I want to print item run that and you can see it prints the two items for loops could also use numbers so I could say for I in range and the range is going to be 0 to 10 and I'll set print I this will print out the number I ten times as you'd expect we also have wild loops so I could create a variable called X and set it equal to ten and I could say while X is greater than zero print X and then I'll also say X minus</div>
        </div><div class="youtube_summary_transcript_text_segment">
            <div><a class="youtube_summary_transcript_text_timestamp" style="padding-top: 16px !important;" href="/watch?v=undefined&amp;t=225s" target="_blank" data-timestamp-href="/watch?v=undefined&amp;t=225s" data-start-time="225">03:45</a></div>
            <div class="youtube_summary_transcript_text" data-start-time="225">equals one to subtract X to prevent an infinite loop so I run that you can see it can't start from ten Python also has what are called exceptions whenever something goes wrong on your program sometimes the program doesn't have to crash sometimes the error can be caught as an exception and can hopefully continue to run so an example of an exception is we go back to our list called Bay and the first item is called zero and the second item is called one but if I was to put in the number two here you can see we get an index error</div>
        </div><div class="youtube_summary_transcript_text_segment">
            <div><a class="youtube_summary_transcript_text_timestamp" style="padding-top: 16px !important;" href="/watch?v=undefined&amp;t=254s" target="_blank" data-timestamp-href="/watch?v=undefined&amp;t=254s" data-start-time="254">04:14</a></div>
            <div class="youtube_summary_transcript_text" data-start-time="254">so I can set try and I can try to print an element from our list that doesn't exist but of course it doesn't exist so it's going to give us that index error so what I can say is except index error and I can say item in lists so you can see look at this text instead of this big error message now Python also lets us create functions so if we want to run some code multiple times without typing it in again we can create a function so I'll call it func and it's just gonna print hello world so</div>
        </div><div class="youtube_summary_transcript_text_segment">
            <div><a class="youtube_summary_transcript_text_timestamp" style="padding-top: 16px !important;" href="/watch?v=undefined&amp;t=280s" target="_blank" data-timestamp-href="/watch?v=undefined&amp;t=280s" data-start-time="280">04:40</a></div>
            <div class="youtube_summary_transcript_text" data-start-time="280">now if I run func it's gonna print hello world and I can run it twice and it's gonna print it twice so that is a simple function I can also create objects in Python so we would use an object for object-oriented programming so say we wanted to create an object for people we might create an object called person to do that we would create a class called person we create a special function called underscore underscore init underscore underscore which is called a constructor and we pass it the variable self every method</div>
        </div><div class="youtube_summary_transcript_text_segment">
            <div><a class="youtube_summary_transcript_text_timestamp" style="padding-top: 16px !important;" href="/watch?v=undefined&amp;t=307s" target="_blank" data-timestamp-href="/watch?v=undefined&amp;t=307s" data-start-time="307">05:07</a></div>
            <div class="youtube_summary_transcript_text" data-start-time="307">in a Python object starts with the variable self so a constructor is a function that's run when we create our object so I'm just gonna print a new person now we created our person class which is the blueprint for our person object so I can create a new person object by saying P equals person just like that and you can see our constructor was called when we created the object and it printed a new person and there is a person object we can also use inheritance because that's one of the core concepts of object-oriented</div>
        </div><div class="youtube_summary_transcript_text_segment">
            <div><a class="youtube_summary_transcript_text_timestamp" style="padding-top: 16px !important;" href="/watch?v=undefined&amp;t=334s" target="_blank" data-timestamp-href="/watch?v=undefined&amp;t=334s" data-start-time="334">05:34</a></div>
            <div class="youtube_summary_transcript_text" data-start-time="334">programming so say I wanted a more specific class called Frances inside these round brackets I can say person that will mean I can use any of the methods and functions from the person class so in this class I might say my name is Frances so what I share is super dot init to call this special init function now I have my Frances class and now if I was to just say F equals Frances and finally we're gonna go over modules so in Python we use modules because we don't want to type everything over and over and over again so if I</div>
        </div><div class="youtube_summary_transcript_text_segment">
            <div><a class="youtube_summary_transcript_text_timestamp" style="padding-top: 16px !important;" href="/watch?v=undefined&amp;t=364s" target="_blank" data-timestamp-href="/watch?v=undefined&amp;t=364s" data-start-time="364">06:04</a></div>
            <div class="youtube_summary_transcript_text" data-start-time="364">import math I'll import the Python maths library and if I say print math pie it prints out the value of pi because my program didn't know that until I imported the math library so that's a really quick overview of Python there's a lot of stuff I didn't get to cover but we're gonna cover that in separate videos in much more detail but that's it for this video don't forget to Like comment favorite and subscribe don't forget to follow us on Facebook Twitter and rat it but that's it for this video</div>
        </div><div class="youtube_summary_transcript_text_segment">
            <div><a class="youtube_summary_transcript_text_timestamp" style="padding-top: 16px !important;" href="/watch?v=undefined&amp;t=390s" target="_blank" data-timestamp-href="/watch?v=undefined&amp;t=390s" data-start-time="390">06:30</a></div>
            <div class="youtube_summary_transcript_text" data-start-time="390">I'll see you next time you</div>
        </div></div>
    </div>`

// Create the selectAndExplain button element
const selectAndExplainButton = document.createElement('button');
selectAndExplainButton.className = "ytp-fullscreen-button ytp-button";
selectAndExplainButton.setAttribute("data-priority", "0");
selectAndExplainButton.setAttribute("data-title-no-tooltip", "Select and Explain");
selectAndExplainButton.setAttribute("title", "Select and Explain");
selectAndExplainButton.innerHTML =
    `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns: xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36 36">
        <text x="10" y="24" font-family="Arial" font-size="24" fill="white">E</text>
    </svg>`

// Attach a click event to the button
selectAndExplainButton.addEventListener('click', function () {
    const video = document.querySelector("#movie_player > div.html5-video-container > video");
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const screenshotDataURL = canvas.toDataURL('image/png');
    console.log(screenshotDataURL);
    // var string = doc.output('datauristring');
    // var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"
    // var x = window.open();
    // x.document.open();
    // x.document.write(iframe);
    // x.document.close();
    // window.open(screenshotDataURL, '_blank');
    // Create a temporary download link to save the screenshot
    const downloadLink = document.createElement('a');
    downloadLink.href = screenshotDataURL;
    // downloadLink.download = 'screenshot.png';
    downloadLink.target = '_blank';

    // Trigger a click on the download link to save the screenshot
    downloadLink.click();

    // const secondaryBox = document.querySelector("#secondary");
    // if (secondaryBox) {
    //     secondaryBox.prepend(summaryBox);
    // }
});

// Create summarize button element
const summarizeButton = document.createElement('button');
summarizeButton.className = "ytp-fullscreen-button ytp-button";
summarizeButton.setAttribute("data-priority", "-1");
summarizeButton.setAttribute("data-title-no-tooltip", "Summarize");
summarizeButton.setAttribute("title", "Summarize");
summarizeButton.innerHTML =
    `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns: xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36 36">
        <text x="10" y="24" font-family="Arial" font-size="24" fill="white">S</text>
    </svg>`

// Attach a click event to the button
summarizeButton.addEventListener('click', function () {
    // Add your logic to open the box or perform other actions here
    const secondaryBox = document.querySelector("#secondary");
    if (secondaryBox) {
        secondaryBox.prepend(summaryBox);
    }
});

// Append the buttons to the YouTube page
const controlBar = document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls");
if (controlBar) {
    controlBar.prepend(selectAndExplainButton);
    controlBar.prepend(summarizeButton);
}