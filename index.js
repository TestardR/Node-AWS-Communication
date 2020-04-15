const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: "",
    secretAccessKey: "",
    region: "",
   /*  s3ForcePathStyle: true */
})
const ep = new AWS.Endpoint('')
const s3 = new AWS.S3(/* { endpoint: ep } */);

const listButckets = () => {
    s3.listBuckets(function (err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data.Buckets);
        }
    });

}

const createBucket = () => {
    var bucketParams = {
        Bucket: '',
    };

    s3.createBucket(bucketParams, function (err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data.Location);
        }
    });
}

const listObjects = () => {
    const options = {
        Bucket: '',
        Prefix: ''

    }

    s3.listObjectsV2(options, function (err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data);
        }
    });


}

const getObject = () => {
    const options = {
        Bucket: '',
        Key: ''
    }

    s3.getObject(options, function (err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            const body = data.Body
            console.log(body);
        }
    });
}



/* createBucket() */
/* listObjects() */
/* listButckets() */
/* getObject() */