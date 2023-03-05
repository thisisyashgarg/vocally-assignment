import EventEmitter from "events";
class BookEmitter extends EventEmitter {}
const bookEmitter = new BookEmitter();

export default function messageEmitter(
  messageName: string,
  messageContent: string
) {
  bookEmitter.emit(messageName, messageContent);
  bookEmitter.on(messageName, (msg) => {
    console.log(msg);
  });
}
