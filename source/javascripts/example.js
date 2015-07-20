(function() {
    var ractive = new Ractive({
        el: '#example-app',
        template: '#example-template',
        onrender: function () {
            var self = this;

            $.ajax({
                url: '/api/example',
                dataType: 'json'
            })
            .done(function (res) {
                self.set('Bands', res.Bands);
            });

            this.observe('freq', function(freq) {
                var f = parseFloat(freq);

                var b = self.get('Bands');
                for (var i in b) {
                    if (freq === '') {
                        // reset input
                        b[i].hide = false;
                    } else if (f && b[i].UplinkLow <= f && f <= b[i].UplinkHigh) {
                        b[i].hide = false;
                    } else {
                        b[i].hide = true;
                    }
                }
                // update data
                self.set('Bands', b);
            });
        }
    });
})();
