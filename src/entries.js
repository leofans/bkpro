module.exports = [
    //{
    //html page name
    //filename: 'page0.html',
    //html entry js
    //entry: './components/page0',
    //...
    //commons chunks
    //chunks: ['vendor'],
    //title: 'my website',
    //template:'',
    //inject:'head||body',
    //favicon:'',
    //...
    //https://github.com/jantimon/html-webpack-plugin
    //},
    {
        filename: 'index',
        entry: './index',
        template: '',
        chunks: ['index'],
    },
    {
        filename: 'secondpage',
        entry: './secondpage',
        //template: './template',
        chunks: ['secondpage'],
    },

];