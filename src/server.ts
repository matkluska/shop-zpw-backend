import app from "./app";
import * as socketIo from "socket.io";

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});


const io = socketIo().listen(server, {
    origins: '*:*',
    transports: ['websocket', 'htmlfile', 'xhr-polling', 'jsonp-polling', 'polling']
}).on('connect', (socket: any) => {
    console.log('Connected client on port %s.', PORT);
    socket.on('newDiscount', (newDiscount: any) => {
        console.log(newDiscount);
        io.emit('newDiscount', newDiscount);
        setTimeout(endDiscount, newDiscount['endTime'], newDiscount['productId']);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

function endDiscount(productId: String) {
    console.log(`arg was => ${productId}`);
    io.emit('endDiscount', productId)
}