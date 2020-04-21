import { TabWrapper } from "./style";
import Table from "./table";
import { Icon } from "antd";
import HoverText from "../HoverText";
import Skillset from "../Skillset";
const Tabs = () => (
	<TabWrapper>
		<div id="t1">
			<div id="t2">
				<div id="t3">
					<div id="t4">
						<div id="t5">
							<ul id="menu">
								<a href="#t1">
									<li class="icon fa fa-bolt" id="uno">
										<Icon type="code" />
										<div>Skills</div>
									</li>
								</a>
								<a href="#t2">
									<li class="icon fa fa-keyboard-o" id="dos">
										<Icon type="laptop" />
										<div>Work</div>
									</li>
								</a>
								<a href="#t3">
									<li class="icon fa fa-rocket" id="tres">
										<Icon type="laptop" />
										<div>Education</div>
									</li>
								</a>
								<a href="#t4">
									<li class="icon fa fa-dribbble" id="cuatro">
										<Icon type="laptop" />
										<div>Hobbies</div>
									</li>
								</a>
							</ul>
							<div class="page" id="p1">
								<section class="icon fa fa-bolt">
									<div>
										<HoverText className="h1" string="Skills" />
										<Skillset skill="Frontend Development" percentage="80%" />
										<Skillset skill="Mobile Development" percentage="40%" />
										<Skillset skill="Backend Development" percentage="50%" />
									</div>
									<Table />
								</section>
							</div>
							<div class="page" id="p2">
								<section class="icon fa fa-keyboard-o">
									<HoverText className="h1" string="Work" />
								</section>
							</div>
							<div class="page" id="p3">
								<section class="icon fa fa-rocket">
									<HoverText className="h1" string="Education" />
								</section>
							</div>
							<div class="page" id="p4">
								<section class="icon fa fa-dribbble">
									<HoverText className="h1" string="Hobbies" />
								</section>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</TabWrapper>
);
export default Tabs;
