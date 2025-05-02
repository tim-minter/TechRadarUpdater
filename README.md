# TechRadarUpdater

Simple one page web app that lets you view and edit a typical Technology Radar json source file.
Once edited you can place the json file in the correct place in your technology radar system (we use Backstage.io).

## Installation

Clone the repo then run the following commands in the repo folder.

```bash
npm init -y
npm install express
run node server.js
```

## Using

Open http://localhost:3000

You will be presented with a web app that displays the contents of the data\architcure.json file. Most fields can be edited and critically you can add the history items that allow you to move entries between rings and explain the reasoning to the viewer.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[Apache](https://choosealicense.com/licenses/apache-2.0/)
