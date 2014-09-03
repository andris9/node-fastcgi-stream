var BeginRequest = module.exports = function(role, flags) {
	this.role = role || 0;
	this.flags = flags || 0;

	this.getSize = function() {
		return 8;
	};

	this.write = function(buffer) {
		buffer.writeUInt16BE(this.role, 0);
		buffer[2] = this.flags;
	};

	this.read = function(buffer) {
		this.role = buffer.readUInt16BE(0);
		this.flags = buffer[2];
	};
};
BeginRequest.prototype.TYPE = BeginRequest.TYPE = 1;

BeginRequest.roles = {
	RESPONDER: 1,
	AUTHORIZER: 2,
	FILTER: 3
};

BeginRequest.flags = {
	KEEPCONN: 1
};