local function main()
	local key = Enums.VirtualKeyCode[GetVar(GlobalVars(), "MA3_OSCC_KEY")];
	local action = GetVar(GlobalVars(), "MA3_OSCC_ACTION");
	if action == 1 then
		action = Enums.KeyAction.Press;
	else
		action = Enums.KeyAction.Release;
	end
	HWKey({key=key,action=action});
end

return main