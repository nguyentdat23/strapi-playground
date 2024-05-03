export default ({ env }) => ({
  ckeditor: {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-ckeditor",
  },
  upload: {
    config: {
      provider: "strapi-upload-minio-v4",
      providerOptions: {
        accessKey: env("MINIO_ACCESS_KEY", "WeHb5tl1oPxgPn2ougM4"),
        secretKey: env(
          "MINIO_SECRET_KEY",
          "NBOp6PbjORbwXV2ksLCgoJwdl2yOKrn6ZBxwB5nX"
        ),
        bucket: env("MINIO_BUCKET", "cms"),
        endPoint: env("MINIO_ENDPOINT", "localhost"),
        port: env("MINIO_PORT", 9000),
        useSSL: env("MINIO_USE_SSL", false),
        folder: env("MINIO_FOLDER", "cms"),
        host: env("MINIO_HOST", "http://localhost:9000"),
      },
    },
  },
});
