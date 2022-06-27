import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableWorkspaceGuest1655948733508 implements MigrationInterface {
    name = 'CreateTableWorkspaceGuest1655948733508'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "workspace_guests" ("id" SERIAL NOT NULL, "user_id" integer NOT NULL, "workspace_id" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_2c1c7e3c76dea85e8cc840ddf60" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "workspace_guests" ADD CONSTRAINT "FK_d3aa65d3726fce187b3e1bae111" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "workspace_guests" ADD CONSTRAINT "FK_f7f6eea4fcea3cd74f696641709" FOREIGN KEY ("workspace_id") REFERENCES "workspace"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "workspace_guests" DROP CONSTRAINT "FK_f7f6eea4fcea3cd74f696641709"`);
        await queryRunner.query(`ALTER TABLE "workspace_guests" DROP CONSTRAINT "FK_d3aa65d3726fce187b3e1bae111"`);
        await queryRunner.query(`DROP TABLE "workspace_guests"`);
    }

}
