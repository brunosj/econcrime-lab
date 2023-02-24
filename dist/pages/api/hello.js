"use strict";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
Object.defineProperty(exports, "__esModule", { value: true });
function handler(req, res) {
    res.status(200).json({ name: 'John Doe' });
}
exports.default = handler;
