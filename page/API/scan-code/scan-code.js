Page({
  scan() {
    my.scan({
      scanType: 'qr',
      success: (res) => {
        my.alert({ title: res.code });
      },
    });
  }
})

