"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodeMailer = require("nodemailer");
const SendGrid = require("nodemailer-sendgrid-transport");
class NodeMailer {
    static initializeTransport() {
        return nodeMailer.createTransport(SendGrid({
            auth: {
                api_key: ''
            }
        }));
    }
    static sendEmail(data) {
        return NodeMailer.initializeTransport().sendMail({
            from: 'abc@gmail.com',
            to: data.to,
            subject: data.subject,
            html: data.html
        });
    }
}
exports.NodeMailer = NodeMailer;
