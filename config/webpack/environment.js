const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
environment.pluging.prepend('Provide', new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery'
}))
module.exports = environment
