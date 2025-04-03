# Payload Block Error

## Setup

### MongoDB

If you use the local MongoDB container...

`mkdir mongodb/data`

Then start the local MongoDB instance...

`cd mongodb && ./mongo.sh up`

### Payload
`cd next`

`cp .env.example .env`

`pnpm install`

`pnpm build`

`pnpm start`

## To Reproduce

1. Create a new page in the pages collection.
2. Add several richtext blocks (optionally with a photo block anywhere). It helps to place numbered text in each block to see the final order.
3. Publish changes
4. Remove any richtext block that is before any other richtext block
5. The order will change, and I believe the removed block is placed at the end as an empty block (although not 100% sure).
6. Publish changes
7. Try to reload the page. The page will fail to load with the reported error: `ERROR: Block with type "undefined" was found in block data, but no block with that type is defined in the config for field with schema path pages.content.`




