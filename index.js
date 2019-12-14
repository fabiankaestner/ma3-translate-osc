const osc = require("osc");

var udpPort = new osc.UDPPort({
    localAddress: "0.0.0.0",
    localPort: 7000,
    remoteAddress: "127.0.0.1",
    remotePort: 8000,
    metadata: true
});
 
udpPort.on("message", oscMsg => {
    let path = oscMsg.address.split("/");
    if (path[1] === "cmd") {
        console.log(path[2]);
        console.log(oscMsg.args[0].value);
    }
    udpPort.send({
        address: "/cmd",
        args: [
            {
                type: "s",
                value: `SetGlobalVar MA3_OSCC_KEY ${path[2]}; SetGlobalVar MA3_OSCC_ACTION ${oscMsg.args[0].value}; Call Plugin 101`
            }
        ]
    })
});

udpPort.open();
