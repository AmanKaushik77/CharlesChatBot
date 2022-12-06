const responses = require("./responses")

test('if user choose watch on convoOne',() => {
    expect(responses.convoOne("watch")).toBe("you chose watch, what is your budget?")
 });

 test('if user choose laptop on convoOne',() => {
    expect(responses.convoOne("laptop")).toBe("you chose laptop, what is your budget?")
 });

 test('if user choose phone on convoOne',() => {
    expect(responses.convoOne("phone")).toBe("you chose phone, what is your budget?")
 });

 test('if user choose tablet on convoOne',() => {
    expect(responses.convoOne("tablet")).toBe("you chose tablet, what is your budget?")
 });

 test('if user choose desktop on convoOne',() => {
    expect(responses.convoOne("desktop")).toBe(`You chose desktop, what is your budget?`)
 });




test ('greetings message test when count 0', () => {
    expect(responses.greetings(0)).toBe("Hello! I am here to assist you in picking your ideal Apple product! YAYYY :D! We can start off by selecting the type of Apple product you wish to buy")

});

test ('greetings message test when count 1', () => {
    expect(responses.greetings(1)).toBe("Hello again! Once we get your budget I can narrow down options for your ideal product! Whats your max budget?")

});

test ('greetings message test when count 2', () => {
    expect(responses.greetings(2)).toBe("Hello again my friend! Once we get your ideal device size I can narrow down options for your ideal product! Whats your ideal size for this device?")
});

test ('product type 1 with budget test for convo2', () => {
    expect(responses.convoTwo(1, 280)).toBe("sorry nothing fits your budget, try again")
})

test ('product type 2 with budget test for convo2', () => {
    expect(responses.convoTwo(2,1440)).toBe("The MacBook Air (M1, 2020) is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.")
})

test ('product type 3 with budget test for convo2', () => {
    expect(responses.convoTwo(3,800)).toBe( "Got it! what size would you prefer (small, medium, large)?")
})

test ('product type 4 with budget test for convo2', () => {
    expect(responses.convoTwo(4,1200)).toBe( "Got it! what size would you prefer (small, medium, large)?")
})

test ('product type 5 with budget test for convo2', () => {
    expect(responses.convoTwo(5,1500)).toBe( "The Mac Mini which comes with different customizations is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.")
})

test ('product type 2 test for convo3', () => {
    expect(responses.convoThree(2,1,"small")).toBe( "The MacBook Air (M1, 2020) is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.")
})

test ('product type 3 test for convo3', () => {
    expect(responses.convoThree(3,1,"small")).toBe( "The IPhone SE is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.")
})

test ('product type 4 test for convo3', () => {
    expect(responses.convoThree(4,2,"large")).toBe( "The IPad Generation 9 and Generation 10 are the devices for you! They fit the information you have provided, and more information about and comparisons between these devices can be found at the apple website.")
})

test ('product type 5 test for convo3', () => {
    expect(responses.convoThree(5,2,"medium")).toBe( "The iMac which comes with different customizations is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.")
})


